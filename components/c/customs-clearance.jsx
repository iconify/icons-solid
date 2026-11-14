import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g4527v6gj {
  d: path("M14 2.5v5h5M8 11h8m-1.25 7l2 2L21 15.75");
}

.lcuoe0bar {
  d: path("M14.271 21.5H5v-19h9l5 5v6.329");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lcuoe0bar"/><path class="g4527v6gj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:customs-clearance"} {...others} />);
}

export default Component;
