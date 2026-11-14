import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bl3497szx {
  d: path("m10.875 12.875l.064-.064a1.5 1.5 0 0 1 2.122 0l.064.064A.659.659 0 0 1 12.659 14h-1.318a.659.659 0 0 1-.466-1.125");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kwgk8l3ak {
  d: path("M2.5 14L12 4l9.5 10");
}

.p3xmfebiu {
  d: path("M5 21.5V15l7-7.5l7 7.5v6.5");
}
</style><g class="hntgybcog"><path class="kwgk8l3ak"/><path class="p3xmfebiu"/><path class="bl3497szx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gable-roof"} {...others} />);
}

export default Component;
