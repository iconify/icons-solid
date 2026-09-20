import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.fcxh8q8kp {
  fill: currentColor;
  d: path("M46 192v8a6 6 0 0 1-12 0v-8a6 6 0 0 1 12 0");
}
</style><path class="fcxh8q8kp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cell-signal-none-light"} {...others} />);
}

export default Component;
