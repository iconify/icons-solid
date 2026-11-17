import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ed8o58bkf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.5 21C2 14 8 8 12 3c4 5 10 11 1.5 18Zm0 0C6 17.5 8 14.5 12 11c4 3.5 6 6.5 1.5 10");
}
</style><path class="ed8o58bkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flame-alt-round"} {...others} />);
}

export default Component;
