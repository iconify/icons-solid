import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b6z33kl5m {
  d: path("M6 7.5h6a3.5 3.5 0 0 1 3.5 3.5v7a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 18v-7A3.5 3.5 0 0 1 6 7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pi3jpw3dr {
  d: path("M5 4.75h11.25a2 2 0 0 1 2 2V19");
}

.vsjz_jngy {
  d: path("M7.75 2H19a2 2 0 0 1 2 2v12.25M5.5 11.5h7");
}
</style><g class="hntgybcog"><path class="b6z33kl5m"/><path class="pi3jpw3dr"/><path class="vsjz_jngy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:magazine-stack"} {...others} />);
}

export default Component;
