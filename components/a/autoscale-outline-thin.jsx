import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cnllexbmp {
  d: path("M3 5a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.fddkg0b5z {
  d: path("M19 7v10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jtvi3oeim {
  d: path("m16 10 3 -3 3 3");
}

.kvksesm4i {
  d: path("M3 15a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="cnllexbmp"/><path class="kvksesm4i"/><path class="fddkg0b5z"/><path class="jtvi3oeim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:autoscale-outline-thin"} {...others} />);
}

export default Component;
