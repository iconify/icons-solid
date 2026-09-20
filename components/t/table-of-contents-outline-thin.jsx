import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c-vnm8iux {
  d: path("M15 12h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p8yct170k {
  d: path("M7 12h6");
}

.r6zx28b8c {
  d: path("M7 16h6");
}

.serb2umws {
  d: path("M15 8h3");
}

.strt8mboj {
  d: path("M7 8h6");
}

.y4_6s7b5v {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="y4_6s7b5v"/><path class="strt8mboj"/><path class="serb2umws"/><path class="p8yct170k"/><path class="c-vnm8iux"/><path class="r6zx28b8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:table-of-contents-outline-thin"} {...others} />);
}

export default Component;
