import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.tnpdeooqi {
  fill: currentColor;
  d: path("M17.293 5.293a1 1 0 0 0 0 1.414L21.586 11H13C7.477 11 3 15.477 3 21a1 1 0 1 0 2 0a8 8 0 0 1 8-8h8.586l-4.293 4.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0");
}
</style><path class="tnpdeooqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-forward-28-filled"} {...others} />);
}

export default Component;
