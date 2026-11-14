import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o-_jxac-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h18v19H3ZM7.5 6v2.5m3-3.5v3m3-3v3m3-2v2.5m-9 2l1 4m2-4.5l.25 4.5M13.5 10l-.25 4.5m3.25-4l-1 4M10 17l.75 2M14 17l-.75 2");
}
</style><path class="o-_jxac-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:xray-hand"} {...others} />);
}

export default Component;
