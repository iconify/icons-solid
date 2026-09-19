import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ftacarm5r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.506 27.312a7.56 7.56 0 0 1-5.513 2.388c-4.175 0-7.5-3.447-7.5-7.621a7.558 7.558 0 0 1 12.966-5.281");
}

.gk_gsbbdp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 42.5S9.694 35.16 9.558 34.225L5.619 7.213C5.483 6.277 6.386 5.5 7.332 5.5h33.336c.946 0 1.85.777 1.713 1.713l-3.94 27.012C38.305 35.161 24 42.5 24 42.5");
}
</style><path class="gk_gsbbdp"/><path class="ftacarm5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cepteteb"} {...others} />);
}

export default Component;
