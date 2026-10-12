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

.n761macpb {
  d: path("M12.25 18.5h1.25A2.5 2.5 0 0 0 16 16v-1.75m-2 2l2-2l2 2");
}

.nxmoe4iti {
  width: 6.5px;
  height: 9px;
  x: 2.75px;
  y: 12.25px;
  rx: 1.5px;
}

.ug447zv2v {
  width: 11.5px;
  height: 8.5px;
  x: 9.75px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="ug447zv2v"/><rect class="nxmoe4iti"/><path class="n761macpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:screen-mirror"} {...others} />);
}

export default Component;
