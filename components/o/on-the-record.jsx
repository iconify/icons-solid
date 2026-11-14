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

.ihq-5abkj {
  d: path("M9.5 14.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m2.5-11v2.75M6 8.5L4.25 6.75M18 8.5l1.75-1.75");
}

.jpo9d9bgw {
  d: path("M6.5 14.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}
</style><g class="hntgybcog"><path class="jpo9d9bgw"/><path class="ihq-5abkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:on-the-record"} {...others} />);
}

export default Component;
