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

.iwhulrnfp {
  d: path("M6.75 6.5v.01m10.5-.01v.01M2.75 10h18.5m-18.5 5.75h18.5");
}

.nq_e_2b0z {
  width: 3.5px;
  height: 17.75px;
  x: 5px;
  y: 3.5px;
  rx: 1px;
}

.nzx-9lahs {
  width: 3.5px;
  height: 17.75px;
  x: 15.5px;
  y: 3.5px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="nq_e_2b0z"/><rect class="nzx-9lahs"/><path class="iwhulrnfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:fence-wooden"} {...others} />);
}

export default Component;
