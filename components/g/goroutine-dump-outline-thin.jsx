import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ffipo4b5s {
  d: path("M9 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.g587irb4v {
  d: path("M7 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.h1j63eveo {
  d: path("M13 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hd5-m5bld {
  d: path("M15 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hv3ppsbji {
  d: path("M11 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}
</style><g class="hntgybcog"><path class="n0n63pb2v"/><path class="g587irb4v"/><path class="hv3ppsbji"/><path class="hd5-m5bld"/><path class="ffipo4b5s"/><path class="h1j63eveo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:goroutine-dump-outline-thin"} {...others} />);
}

export default Component;
