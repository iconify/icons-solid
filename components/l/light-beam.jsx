import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u3ezd4bjo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 10.25h3A1.75 1.75 0 0 1 9 12a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 2.5 12a1.75 1.75 0 0 1 1.75-1.75m6.5-1.75za1.75 1.75 0 0 1 1.75 1.75v3.5a1.75 1.75 0 0 1-1.75 1.75A1.75 1.75 0 0 1 9 13.75v-3.5a1.75 1.75 0 0 1 1.75-1.75m4.5 3.5h6.25m-6.25-3L21 5.5M15.25 15L21 18.5");
}
</style><path class="u3ezd4bjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:light-beam"} {...others} />);
}

export default Component;
