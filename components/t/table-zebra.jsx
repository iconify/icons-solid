import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.lnl3h1qkf {
  fill: currentColor;
  d: path("M3 7.75h18V11H3Zm0 6.5h18v3.25H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vic6c766r {
  d: path("M10 3v4.75M10 11v3.25m0 3.25V21");
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="lnl3h1qkf"/><path class="vic6c766r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:table-zebra"} {...others} />);
}

export default Component;
