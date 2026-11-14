import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jnlxfacyd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 7.5H6a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h2.5Zm0 2.5H11m-2.5 4H11m3-9.5h7.5v15H14Zm3.75 5.5h.01m-.01 4h.01");
}
</style><path class="jnlxfacyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:disconnect-power"} {...others} />);
}

export default Component;
