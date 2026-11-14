import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jeeuugbgu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3v18h18M6 3h.01M9 3h.01M12 3h.01M15 3h.01M18 3h.01M21 3h.01M21 6h.01M21 9h.01M21 12h.01M21 15h.01M21 18h.01M7 7.5h.01m4.49 0h.01M16 10h.01M7 12h.01m4.49 1h.01M16 15h.01M7 16.5h.01m4.49 1h.01");
}
</style><path class="jeeuugbgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:data-matrix-code"} {...others} />);
}

export default Component;
