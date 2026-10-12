import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iox7lku7y {
  d: path("m14.5 19.5l5-5");
}

.r49ernf5s {
  d: path("M2.75 4.5h18.5m-18.5 5h18.5m-18.5 5h6.5m-6.5 5h6.5");
}

.upu83lbfh {
  cx: 17px;
  cy: 17px;
  r: 4.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="r49ernf5s"/><circle class="upu83lbfh"/><path class="iox7lku7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:blocklist-sharp"} {...others} />);
}

export default Component;
