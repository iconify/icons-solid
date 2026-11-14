import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rto7xq4vs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 19a8 8 0 1 1 8-8m-8 0h.01m4.115 9.25l.061-.489a1.5 1.5 0 0 1 .428-.875l3.011-3.011a1.237 1.237 0 0 1 1.75 0a1.237 1.237 0 0 1 0 1.75l-3.011 3.011a1.5 1.5 0 0 1-.875.428l-.489.061a.784.784 0 0 1-.875-.875");
}
</style><path class="rto7xq4vs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:issue-edit"} {...others} />);
}

export default Component;
