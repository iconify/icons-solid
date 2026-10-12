import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ofq06uyxm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5h12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4V16c0 1.5.75 3 2 4H8c1.25-1 2-2.5 2-4V6.5H6a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1");
}
</style><path class="ofq06uyxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rivet"} {...others} />);
}

export default Component;
