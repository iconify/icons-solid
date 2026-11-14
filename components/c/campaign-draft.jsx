import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i61vc0b-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.403 16.607L7.5 13.5h-4v-5h4l9.5-5v9.565M6 13.5l1.5 5m7.5 2.75l.5-2.75l3.75-3.75L21.5 17l-3.75 3.75Z");
}
</style><path class="i61vc0b-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:campaign-draft"} {...others} />);
}

export default Component;
