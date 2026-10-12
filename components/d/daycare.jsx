import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cgg5lxbum {
  d: path("M9 18.75V17.5a3 3 0 0 1 3-3a3 3 0 0 1 3 3v1.25Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.suh5co28d {
  d: path("M3.75 10.6a2 2 0 0 1 .7-1.52l6.25-5.4a2 2 0 0 1 2.6 0l6.25 5.4a2 2 0 0 1 .7 1.52v8.65a2 2 0 0 1-2 2H5.75a2 2 0 0 1-2-2Z");
}

.wwna4hbmj {
  cx: 12px;
  cy: 10.25px;
  r: 2px;
}
</style><g class="hntgybcog"><path class="suh5co28d"/><circle class="wwna4hbmj"/><path class="cgg5lxbum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:daycare"} {...others} />);
}

export default Component;
