import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bc1przfqa {
  d: path("M4.25 17a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s3n8rxaml {
  d: path("m7.25 14.25l5-5a3.75 3.75 0 0 1 5-4.75L14.5 7.25l2.25 2.25l2.75-2.75a3.75 3.75 0 0 1-4.75 5l-5 5");
}
</style><g class="hntgybcog"><path class="s3n8rxaml"/><path class="bc1przfqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pin-mechanic"} {...others} />);
}

export default Component;
