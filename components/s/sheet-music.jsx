import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gv7r76b5a {
  d: path("M4 7h7.25m4.5 0H20M4 12h2.67m9.83 0H20M4 17h2.67m8.66 0H20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ss4imzden {
  d: path("M13.5 14.5v-9");
}

.wlo8rlbpx {
  cx: 11px;
  cy: 14.5px;
  r: 2.5px;
}
</style><g class="hntgybcog"><path class="gv7r76b5a"/><circle class="wlo8rlbpx"/><path class="ss4imzden"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sheet-music"} {...others} />);
}

export default Component;
