import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.as_-bzbvd {
  d: path("M2 9h11");
}

.cfyvl-o0i {
  d: path("M16 12h4");
}

.fo_mf3upf {
  d: path("M2 8a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mi_m6achy {
  d: path("m17 9 3 3 -3 3");
}
</style><g class="hntgybcog"><path class="fo_mf3upf"/><path class="as_-bzbvd"/><path class="cfyvl-o0i"/><path class="mi_m6achy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:action-http-outline-thin"} {...others} />);
}

export default Component;
