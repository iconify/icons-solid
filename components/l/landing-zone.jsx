import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lizzrcblo {
  d: path("M3 10.5a9 5 0 1 0 18 0a9 5 0 1 0-18 0M2.5 19h19");
}

.xtg22db0a {
  d: path("M7.5 10.5a4.5 2 0 1 0 9 0a4.5 2 0 1 0-9 0");
}
</style><g class="hntgybcog"><path class="lizzrcblo"/><path class="xtg22db0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:landing-zone"} {...others} />);
}

export default Component;
