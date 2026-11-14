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

.j88foqvdl {
  d: path("M12 17c-2.5-2.25-6.5-4.5-6.5-8a6.5 6.5 0 0 1 13 0c0 3.5-4 5.75-6.5 8");
}

.mnj5l-bin {
  fill: currentColor;
  d: path("M11 21a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}

.ms0p6sb1m {
  d: path("M9.5 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="j88foqvdl"/><path class="ms0p6sb1m"/><path class="mnj5l-bin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:map-pin-dot"} {...others} />);
}

export default Component;
