import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ikco28bfq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 11h8v10H8Zm2.393 0a2.83 2.83 0 0 1-1.226-2.333c0-.709.236-1.18.472-1.417C10.347 6.542 11.292 4.889 12 3c.236 1.18.944 2.125 1.889 2.833c.708.709.944 1.653.944 2.834c0 .932-.458 1.804-1.226 2.333");
}
</style><path class="ikco28bfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:candle-sharp"} {...others} />);
}

export default Component;
