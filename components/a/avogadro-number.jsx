import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uhfm5x2wl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v18H3Zm4.5 4.5h.01m4.49 0h.01m4.49 0h.01M7.5 12h.01M12 12h.01m4.49 0h.01M7.5 16.5h.01m4.49 0h.01m4.49 0h.01");
}
</style><path class="uhfm5x2wl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:avogadro-number"} {...others} />);
}

export default Component;
