import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c_f8pzr3u {
  d: path("M13.5 17.5h7V21h-7Z");
}

.le0nh2bmp {
  fill: currentColor;
  d: path("M3.5 17.5h7V21h-7Z");
}

.u-rc5hb9z {
  d: path("M3 3h18v11.5H3Zm0 4.5h18M9 3v11.5M15 3v11.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u-rc5hb9z"/><path class="le0nh2bmp"/><path class="c_f8pzr3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sheet-tab"} {...others} />);
}

export default Component;
