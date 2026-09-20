import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c13n5ccfl {
  fill: currentColor;
  d: path("M15 6h3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V9a3 3 0 0 1 3 -3h3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.coi-np7dk {
  d: path("M15 9v6");
}

.e8mk-vdvn {
  d: path("M6 9v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l517yxbln {
  d: path("M12 9v6");
}

.n09nomjwg {
  d: path("M15 6h3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V9a3 3 0 0 1 3 -3h3");
}

.x2sfcqbvg {
  d: path("M18 9v6");
}

.y5k8b5bfa {
  d: path("M9 9v6");
}
</style><g class="hntgybcog"><path class="c13n5ccfl"/><path class="n09nomjwg"/><path class="e8mk-vdvn"/><path class="y5k8b5bfa"/><path class="l517yxbln"/><path class="coi-np7dk"/><path class="x2sfcqbvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:memory-long-term-duotone-thin"} {...others} />);
}

export default Component;
