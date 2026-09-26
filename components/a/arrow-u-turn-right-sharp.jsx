import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ywuvlsy5n {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 19L10 19C7.2386 19 5 16.7614 5 14C5 11.2386 7.2386 9 10 9L18.6246 9M13.726 4.7809L18.9999 9L13.6247 13.3002");
}
</style><path class="ywuvlsy5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-u-turn-right-sharp"} {...others} />);
}

export default Component;
