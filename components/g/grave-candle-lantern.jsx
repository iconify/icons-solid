import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mzzjlibuf {
  d: path("m5.5 8.5l6.5-6l6.5 6Zm1.5 0h10v10H7Zm-2 10h14v3H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y63x6l_bj {
  d: path("M12 11.25c2.25 2 2.5 4 0 4.5c-2.5-.5-2.25-2.5 0-4.5Z");
}
</style><g class="ulnmmdpxh"><path class="mzzjlibuf"/><path class="y63x6l_bj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:grave-candle-lantern"} {...others} />);
}

export default Component;
