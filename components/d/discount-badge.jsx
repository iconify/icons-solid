import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f1fq0nd8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.068 3.141l.29.242a2.19 2.19 0 0 0 1.775.475l.372-.064a1.67 1.67 0 0 1 1.849 1.067l.131.355a2.19 2.19 0 0 0 1.299 1.299l.355.131a1.67 1.67 0 0 1 1.067 1.849l-.064.372a2.19 2.19 0 0 0 .475 1.775l.242.29a1.67 1.67 0 0 1 0 2.136l-.242.29a2.19 2.19 0 0 0-.475 1.775l.064.372a1.67 1.67 0 0 1-1.067 1.849l-.355.131a2.19 2.19 0 0 0-1.299 1.299l-.131.355a1.67 1.67 0 0 1-1.849 1.067l-.372-.064a2.19 2.19 0 0 0-1.775.475l-.29.242a1.67 1.67 0 0 1-2.136 0l-.29-.242a2.19 2.19 0 0 0-1.775-.475l-.372.064a1.67 1.67 0 0 1-1.849-1.067l-.131-.355a2.19 2.19 0 0 0-1.299-1.299l-.355-.131a1.67 1.67 0 0 1-1.067-1.849l.064-.372a2.19 2.19 0 0 0-.475-1.775l-.242-.29a1.67 1.67 0 0 1 0-2.136l.242-.29a2.19 2.19 0 0 0 .475-1.775l-.064-.372a1.67 1.67 0 0 1 1.067-1.849l.355-.131a2.19 2.19 0 0 0 1.299-1.299l.131-.355a1.67 1.67 0 0 1 1.849-1.067l.372.064a2.19 2.19 0 0 0 1.775-.475l.29-.242a1.67 1.67 0 0 1 2.136 0M9.5 14.5l5-5m-4.75.25h.01m4.49 4.5h.01");
}
</style><path class="f1fq0nd8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:discount-badge"} {...others} />);
}

export default Component;
