import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.yc5jp-bmg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.236 4.438v38.976m5.864.024H23.822m3.504-25.643l-7.774-3.219l-7.774-3.218l7.776-3.33L27.33 4.7l-.002 6.548z");
}
</style><path class="yc5jp-bmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:minesweeper-twist"} {...others} />);
}

export default Component;
