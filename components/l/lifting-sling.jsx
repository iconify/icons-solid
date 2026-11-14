import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pl_b4abby {
  d: path("m7 14l5-5.5l5 5.5M6.125 14h11.75a2.625 2.625 0 0 1 2.625 2.625v2.25a2.625 2.625 0 0 1-2.625 2.625H6.125A2.625 2.625 0 0 1 3.5 18.875v-2.25A2.625 2.625 0 0 1 6.125 14");
}

.tp-0vzbpb {
  d: path("M14 2.5v4a2 2 0 0 1-4 0");
}
</style><g class="hntgybcog"><path class="tp-0vzbpb"/><path class="pl_b4abby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lifting-sling"} {...others} />);
}

export default Component;
