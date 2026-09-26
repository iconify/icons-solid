import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k3c2rj_zs {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 19L14 19C16.7614 19 19 16.7614 19 14C19 11.2386 16.7614 9 14 9L5.3753 9M10.2739 4.7809L5 9L10.3753 13.3002");
}
</style><path class="k3c2rj_zs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-u-turn-left-sharp"} {...others} />);
}

export default Component;
