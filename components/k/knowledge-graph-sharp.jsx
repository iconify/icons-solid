import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp0egaclj {
  cx: 12px;
  cy: 12px;
  r: 3px;
}

.jo45v1frk {
  cx: 19px;
  cy: 5px;
  r: 2.25px;
}

.mc82-xb_k {
  cx: 19px;
  cy: 19px;
  r: 2.25px;
}

.uijnajaqq {
  d: path("m6.6 6.6l3.3 3.3m7.5-3.3l-3.3 3.3m-7.5 7.5l3.3-3.3m7.5 3.3l-3.3-3.3M7.25 5h9.5M19 7.25v9.5");
}

.up5bnccaf {
  cx: 5px;
  cy: 5px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yohxqabuf {
  cx: 5px;
  cy: 19px;
  r: 2.25px;
}
</style><g class="x2cwu0gfd"><circle class="gp0egaclj"/><circle class="up5bnccaf"/><circle class="jo45v1frk"/><circle class="yohxqabuf"/><circle class="mc82-xb_k"/><path class="uijnajaqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:knowledge-graph-sharp"} {...others} />);
}

export default Component;
