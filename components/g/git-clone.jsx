import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ajdaxebjd {
  width: 13px;
  height: 13px;
  x: 2.75px;
  y: 8.25px;
  rx: 2.5px;
}

.gpo1hwbum {
  d: path("M8.25 6v-.75a2.5 2.5 0 0 1 2.5-2.5h8a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5H18m-8.75-5v5m-2.25-2L9.25 16l2.25-2.25m-5.5 3v.75a1 1 0 0 0 1 1h4.5a1 1 0 0 0 1-1v-.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="ajdaxebjd"/><path class="gpo1hwbum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:git-clone"} {...others} />);
}

export default Component;
