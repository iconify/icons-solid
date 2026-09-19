import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ep6q_wb2x {
  fill: currentColor;
  d: path("m7 10l5 5l5-5z");
}
</style><path class="ep6q_wb2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-arrow-drop-down"} {...others} />);
}

export default Component;
