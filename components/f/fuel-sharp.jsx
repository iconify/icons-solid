import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bfb-p5b2w {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21V3H14V21M3 21H14M3 21H1M14 21H16M14 11H18V16C18 17.1 18.895 18 20 18C21.105 18 22 17.1 22 16V8L17.6 4.7M6 9H11");
}
</style><path class="bfb-p5b2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:fuel-sharp"} {...others} />);
}

export default Component;
