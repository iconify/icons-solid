import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uit8fi3go {
  cx: 17.75px;
  cy: 15.25px;
  r: 2.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xe95m5bil {
  cx: 6.25px;
  cy: 17.25px;
  r: 2.75px;
}

.zq5r1db3x {
  d: path("M9 17.25V5.533l.8-.163l9.5-1.9l1.2-.245V15.25");
}
</style><g class="x2cwu0gfd"><path class="zq5r1db3x"/><circle class="xe95m5bil"/><circle class="uit8fi3go"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:music-share-sharp"} {...others} />);
}

export default Component;
