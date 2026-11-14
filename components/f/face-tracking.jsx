import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mwe4uacfo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m6 1.5v-3c-1.75-1.25-2.5-3-2.5-5c0-3 2.25-5 5.25-5c2.75 0 4.75 2 4.75 4.5l1.5 3c.1.3-.1.5-.5.5h-1V15c0 .8-.7 1.5-1.5 1.5h-1.5v2");
}
</style><path class="mwe4uacfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:face-tracking"} {...others} />);
}

export default Component;
