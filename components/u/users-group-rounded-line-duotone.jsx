import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dt10bzeut {
  cx: 9px;
  cy: 17px;
  rx: 7px;
  ry: 4px;
}

.e5joplaob {
  d: path("M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xkqyiwblc {
  cx: 9px;
  cy: 6px;
  r: 4px;
}

.z0e4ip2yf {
  d: path("M12.584 4.22144C13.1302 3.48059 14.0091 3 15.0002 3C16.657 3 18.0002 4.34315 18.0002 6C18.0002 7.65685 16.657 9 15.0002 9C14.0091 9 13.1302 8.51941 12.584 7.77856");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="ipq1z-bjh"><circle class="xkqyiwblc"/><path class="z0e4ip2yf"/><ellipse class="dt10bzeut"/><path class="e5joplaob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:users-group-rounded-line-duotone"} {...others} />);
}

export default Component;
