import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hzuoybbgw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8L5 3h14l2.5 5ZM6 10.75h12V22H6Zm3 3h.01m2.99 0h.01m2.99 0h.01M9 16.5h.01m2.99 0h.01m2.99 0h.01M9 19.25h.01m2.99 0h.01m2.99 0h.01");
}
</style><path class="hzuoybbgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:atm-pin-pad-privacy"} {...others} />);
}

export default Component;
