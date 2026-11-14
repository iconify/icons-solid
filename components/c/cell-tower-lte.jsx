import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z03pbbddm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.5v18m-2.5-18h5M9.5 7h5m-5 3.5h5M6 2.75a7.5 7.5 0 0 0 0 8.5m12-8.5a7.5 7.5 0 0 1 0 8.5");
}
</style><path class="z03pbbddm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cell-tower-lte"} {...others} />);
}

export default Component;
