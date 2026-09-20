import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.gituuu1sb {
  fill: currentColor;
  d: path("M13.707 6.293a1 1 0 0 1 0 1.414L11.414 10l2.293 2.293a1 1 0 0 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10L6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 0M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16");
}
</style><path class="gituuu1sb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:presence-offline-20-regular"} {...others} />);
}

export default Component;
