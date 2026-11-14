import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u4ugadhqo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9.25a7 7 0 1 0 14 0a7 7 0 1 0-14 0ZM8.5 19h7M12 19v2.5m-3.25-12h.01M12 7.75h.01m3.24 1.75h.01m-5.01 3.25h.01m3.49 0h.01");
}
</style><path class="u4ugadhqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:golf-ball"} {...others} />);
}

export default Component;
