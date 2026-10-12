import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jm6-iabor {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.5 17.15l-.5 3.1h6l-.5-3.1");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.x0uj7z52t {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.5 11.5h.01m3.49 0h.01m3.49 0h.01m-5.26 2.75h.01m3.49 0h.01");
}

.ysnuqbprc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 8.75h16.5c0 4.75-3.5 8.5-8.25 8.5s-8.25-3.75-8.25-8.5Zm0 0h-1m17.5 0h1");
}
</style><g class="ux2u0rbkq"><path class="ysnuqbprc"/><path class="x0uj7z52t"/><path class="jm6-iabor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:colander-sharp"} {...others} />);
}

export default Component;
