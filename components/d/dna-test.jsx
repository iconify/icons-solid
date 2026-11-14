import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.es8f7jbsw {
  d: path("M5 3c0 4.5 6 4.5 6 9s-6 4.5-6 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rseep8b2h {
  d: path("M11 3c0 4.5-6 4.5-6 9s6 4.5 6 9m4-2.5l2 2l4.5-4.5");
}
</style><g class="hntgybcog"><path class="es8f7jbsw"/><path class="rseep8b2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dna-test"} {...others} />);
}

export default Component;
