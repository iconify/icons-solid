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

.lpws5cv_a {
  cx: 12px;
  cy: 6.5px;
  r: 3.75px;
}

.oj484ac2v {
  d: path("M4.25 21.25v-2a5.5 5.5 0 0 1 5.5-5.5h4.5a5.5 5.5 0 0 1 5.5 5.5v2ZM15.5 16v3M14 17.5h3");
}
</style><g class="hntgybcog"><circle class="lpws5cv_a"/><path class="oj484ac2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:first-responder"} {...others} />);
}

export default Component;
