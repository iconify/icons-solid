import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fp19xxh4z {
  d: path("M6 7.25V6a3 3 0 0 1 6 0v1.25m-2.25 7h11.5m-3-3l3 3l-3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mbw4vtsqb {
  width: 12.5px;
  height: 14px;
  x: 2.75px;
  y: 7.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="mbw4vtsqb"/><path class="fp19xxh4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:checkout"} {...others} />);
}

export default Component;
