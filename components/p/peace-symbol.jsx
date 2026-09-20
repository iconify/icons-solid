import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.advo2wbmd {
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M64 6v116m0-58l41.01 41.01m-82.02 0L64 64");
}

.fuu_ksbfy {
  cx: 64px;
  cy: 64px;
  r: 58px;
}

.r-0uhlbzq {
  fill: none;
  stroke: var(--svg-color--f79229, #f79229);
  stroke-miterlimit: 10;
  stroke-width: var(--svg-stroke-width--11px, 11px);
}
</style><g class="r-0uhlbzq"><circle class="fuu_ksbfy"/><path class="advo2wbmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:peace-symbol"} {...others} />);
}

export default Component;
