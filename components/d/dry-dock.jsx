import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b5j-_fbnq {
  d: path("M3 4.5v15h18v-15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k_-bicc8z {
  d: path("M6 8h12l-2 7.5H8Zm4 7.5v4m4-4v4");
}
</style><g class="hntgybcog"><path class="b5j-_fbnq"/><path class="k_-bicc8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dry-dock"} {...others} />);
}

export default Component;
