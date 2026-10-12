import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wl67qxbmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 5.25h3.5v6h-3.5zm12 0h3.5v6h-3.5zM6 11.25v3.5c0 3.6 2.7 6.5 6 6.5s6-2.9 6-6.5v-3.5m-12-6v-2.5m12 2.5v-2.5");
}
</style><path class="wl67qxbmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:patch-cable-sharp"} {...others} />);
}

export default Component;
