import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jx0p4fbya {
  fill: none;
  stroke: currentColor;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rxo5a5b4g {
  d: path("M10.9289 14.929C12.3096 13.548 13 12.858 13 12C13 11.142 12.3096 10.452 10.9289 9.071C9.5482 7.69 8.8579 7 8 7C7.1421 7 6.4518 7.69 5.0711 9.071C3.6904 10.452 3 11.142 3 12C3 12.858 3.6904 13.548 5.0711 14.929C6.4518 16.31 7.1421 17 8 17C8.8579 17 9.5482 16.31 10.9289 14.929Z");
}

.szzedacvz {
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16 7.429V4H19.75M16 4C19.125 6.857 21 9 21 12C21 15 19.2476 18.286 16 20");
}
</style><g class="jx0p4fbya"><path class="szzedacvz"/><path class="rxo5a5b4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rotate-anticlockwise-2-linear"} {...others} />);
}

export default Component;
