import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ag39tfb0x {
  d: path("M12 15v6h10v-6");
}

.inae6abkl {
  d: path("M14.5 10.5 17 8l2.5 2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rk0ztqbwb {
  d: path("M7.69 3.37a4 4 0 1 1 -3.38 0");
}

.zy0mbfbon {
  d: path("M17 8v5");
}
</style><g class="nrj6p8qat"><path class="rk0ztqbwb"/><path class="ag39tfb0x"/><path class="zy0mbfbon"/><path class="inae6abkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:agent-outbox-outline-regular"} {...others} />);
}

export default Component;
