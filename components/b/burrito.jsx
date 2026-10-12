import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ler0qmbty {
  d: path("M6 7a6 4 0 0 1 12 0v4.75a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Z");
}

.nxezfipuv {
  d: path("M9 7a3 1.25 0 1 0 6 0a3 1.25 0 1 0-6 0m9 2.75c-2.5.25-4.5 1.25-5.75 3M6 15.5l1.5-1l1.5 1l1.5-1l1.5 1l1.5-1l1.5 1l1.5-1l1.5 1v4.75a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Z");
}
</style><g class="hntgybcog"><path class="ler0qmbty"/><path class="nxezfipuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:burrito"} {...others} />);
}

export default Component;
