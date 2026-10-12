import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cldbi7bap {
  cx: 19.5px;
  cy: 13px;
  r: 1.25px;
}

.gcw325b6s {
  cx: 7px;
  cy: 10px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x74ytnb8g {
  cx: 19.5px;
  cy: 7.5px;
  r: 1.25px;
}

.xq6g3_bmq {
  d: path("M5.25 9.75c0-3.1 2.4-5.5 5.25-5.5c3.3 0 5.25 2.4 5.25 5.5c0 5.2-4.5 9-10 11");
}
</style><g class="x2cwu0gfd"><path class="xq6g3_bmq"/><circle class="gcw325b6s"/><circle class="x74ytnb8g"/><circle class="cldbi7bap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bass-clef-sharp"} {...others} />);
}

export default Component;
