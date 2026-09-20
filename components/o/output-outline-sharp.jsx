import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oh9yi6bap {
  fill: currentColor;
  d: path("M4 20V4h16v3h-1V5H5v14h14v-2h1v3zm12.712-3.712l-.689-.688l3.056-3.1H9.385v-1h9.694l-3.056-3.1l.689-.688L21 12z");
}
</style><path class="oh9yi6bap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:output-outline-sharp"} {...others} />);
}

export default Component;
