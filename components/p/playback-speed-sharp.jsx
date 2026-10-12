import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uf_gqut0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.79 5.27l9.92 5.96L21 12l-1.29.77l-9.92 5.96l-1.29.77v-15zM2.75 8.25h3m-3 3.75h2m-2 3.75h3");
}
</style><path class="uf_gqut0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:playback-speed-sharp"} {...others} />);
}

export default Component;
