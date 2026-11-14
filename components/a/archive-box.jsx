import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.giy5epy0d {
  d: path("M10.75 11.5h2.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 13.25 14h-2.5a1.25 1.25 0 0 1-1.25-1.25a1.25 1.25 0 0 1 1.25-1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o9wcyybje {
  d: path("M4.75 4h14.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25H4.75A2.25 2.25 0 0 1 2.5 6.25A2.25 2.25 0 0 1 4.75 4M4 8.5v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-10");
}
</style><g class="hntgybcog"><path class="o9wcyybje"/><path class="giy5epy0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:archive-box"} {...others} />);
}

export default Component;
