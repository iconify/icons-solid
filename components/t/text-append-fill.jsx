import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vmn94149x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 21H21M15 15H21M3 9H21M3 3H21M8.6 21L11 18.75L8.6 16.5M11 18.75H4.6C3.7164 18.75 3 18.08 3 17.25V15");
}
</style><path class="vmn94149x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:text-append-fill"} {...others} />);
}

export default Component;
