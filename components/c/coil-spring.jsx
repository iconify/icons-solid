import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bqfjxi-_h {
  d: path("M6.5 17.5a5.5 2 0 1 0 11 0a5.5 2 0 1 0-11 0m0 2.5v1.5");
}

.f6e1gccwb {
  d: path("M6.5 5.5a5.5 2 0 1 0 11 0a5.5 2 0 1 0-11 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tji4e4jlc {
  d: path("M6.5 13.5a5.5 2 0 1 0 11 0a5.5 2 0 1 0-11 0");
}

.w_z9yb8yk {
  d: path("M6.5 9.5a5.5 2 0 1 0 11 0a5.5 2 0 1 0-11 0");
}
</style><g class="hntgybcog"><path class="f6e1gccwb"/><path class="w_z9yb8yk"/><path class="tji4e4jlc"/><path class="bqfjxi-_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:coil-spring"} {...others} />);
}

export default Component;
