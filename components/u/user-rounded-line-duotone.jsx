import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dtl23o_xq {
  cx: 12px;
  cy: 6px;
  r: 4px;
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kdx2mdh6q {
  cx: 12px;
  cy: 17px;
  opacity: var(--svg-opacity--0-5, 0.5);
  rx: 7px;
  ry: 4px;
}
</style><g class="ipq1z-bjh"><circle class="dtl23o_xq"/><ellipse class="kdx2mdh6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-rounded-line-duotone"} {...others} />);
}

export default Component;
