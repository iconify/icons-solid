import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b36niz7vv {
  cx: 12px;
  cy: 7.75px;
  r: 2.25px;
}

.eca6l-a7l {
  d: path("M2.75 15.75a2.75 2.75 0 0 1 5.5 0Z");
}

.ew68babsr {
  cx: 5.5px;
  cy: 8.75px;
  r: 2px;
}

.u1u7ynxir {
  d: path("M9 15.75a3 3 0 0 1 6 0Zm-6.25 0h18.5V18H2.75zM5.5 18v3.25m13-3.25v3.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xd6dk168z {
  cx: 18.5px;
  cy: 8.75px;
  r: 2px;
}

.y60bg5_ln {
  d: path("M15.75 15.75a2.75 2.75 0 0 1 5.5 0Z");
}
</style><g class="x2cwu0gfd"><circle class="ew68babsr"/><path class="eca6l-a7l"/><circle class="xd6dk168z"/><path class="y60bg5_ln"/><circle class="b36niz7vv"/><path class="u1u7ynxir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:town-meeting-sharp"} {...others} />);
}

export default Component;
