import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xmcxdubgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 19H14C16.7614 19 19 16.7614 19 14C19 11.2386 16.7614 9 14 9H6M10 5L5.18766 8.60957C4.93745 8.80973 4.93745 9.19027 5.18766 9.39043L10 13");
}
</style><path class="xmcxdubgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-u-turn-left-two-tone"} {...others} />);
}

export default Component;
