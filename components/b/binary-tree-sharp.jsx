import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cpuytsbrt {
  d: path("m11.28 7.37l-3.56 9.26m5-9.26l3.56 9.26");
}

.hx-rxnbzw {
  cx: 7px;
  cy: 18.5px;
  r: 2px;
}

.m7thmobns {
  cx: 17px;
  cy: 18.5px;
  r: 2px;
}

.mwe-9d8rn {
  cx: 12px;
  cy: 5.5px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="mwe-9d8rn"/><circle class="hx-rxnbzw"/><circle class="m7thmobns"/><path class="cpuytsbrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:binary-tree-sharp"} {...others} />);
}

export default Component;
