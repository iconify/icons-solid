import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.er4m7db0a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 9.25h5.5v12h-5.5zM7 12.5v5m9.75-7l-.63-5.84a2.4 2.4 0 1 1 4.56 1.48Zm-.15.5l-1.4 4.4m-.78.66l.96.3l.95.31l-.31.95l-.76 2.38l-.31.95l-.95-.31l-.96-.3l-.95-.31l.31-.95l.76-2.38l.31-.95z");
}
</style><path class="er4m7db0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lips-sharp"} {...others} />);
}

export default Component;
