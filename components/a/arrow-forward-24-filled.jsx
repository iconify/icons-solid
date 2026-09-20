import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sqkmu-bsm {
  fill: currentColor;
  d: path("M14.293 6.707a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L17.586 12H11a6 6 0 0 0-6 6a1 1 0 1 1-2 0a8 8 0 0 1 8-8h6.586z");
}
</style><path class="sqkmu-bsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-forward-24-filled"} {...others} />);
}

export default Component;
