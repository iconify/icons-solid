import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ltcmuob9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.023 18.5H2.5L11 3l5.323 9.167M11 9.25v3m0 3h.01M15.5 17l2.75-2.75L21 17m-5.5 4l2.75-2.75L21 21");
}
</style><path class="ltcmuob9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:severity-major"} {...others} />);
}

export default Component;
