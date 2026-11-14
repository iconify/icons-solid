import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xscp2bblb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.609 2.5h4.782a1.75 1.75 0 0 1 1.384.68l3.189 4.126a1.75 1.75 0 0 1 .301 1.539l-3.159 11.373A1.75 1.75 0 0 1 14.42 21.5H9.58a1.75 1.75 0 0 1-1.686-1.282L4.735 8.845a1.75 1.75 0 0 1 .301-1.539L8.225 3.18a1.75 1.75 0 0 1 1.384-.68M12 6.5V16M9 9.5h6");
}
</style><path class="xscp2bblb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:coffin"} {...others} />);
}

export default Component;
