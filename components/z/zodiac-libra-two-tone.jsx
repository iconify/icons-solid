import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m-edsyknx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 13L5 13C5.5523 13 6 12.5523 6 12L6 11C6 7.6863 8.6863 5 12 5C15.3137 5 18 7.6863 18 11L18 12C18 12.5523 18.4477 13 19 13L22 13M2 19L22 19");
}
</style><path class="m-edsyknx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:zodiac-libra-two-tone"} {...others} />);
}

export default Component;
