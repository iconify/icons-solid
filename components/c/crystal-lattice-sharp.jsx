import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c64_wyz6a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 20.25V6.75l.53-.85l1.44-2.3l.53-.85l.53.85l1.44 2.3l.53.85v14.5h-5zM3 20.5v-8l.43-.61l.89-1.28l.43-.61l.43.61l.89 1.28l.43.61v8.75H3zm14.5 0v-8l.43-.61l.89-1.28l.43-.61l.43.61l.89 1.28l.43.61v8.75h-3.5zM12 8v9.5");
}
</style><path class="c64_wyz6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:crystal-lattice-sharp"} {...others} />);
}

export default Component;
