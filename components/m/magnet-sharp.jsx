import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zhg8fccuz {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 13L4 3L9 3L9 13C9 14.6569 10.3431 16 12 16C13.6569 16 15 14.6569 15 13L15 3L20 3L20 13C20 17.4183 16.4183 21 12 21C7.5817 21 4 17.4183 4 13ZM4 7L9 7M15 7L20 7");
}
</style><path class="zhg8fccuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:magnet-sharp"} {...others} />);
}

export default Component;
