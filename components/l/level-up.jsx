import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hpi-3-96m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.15 3.37l.49 1.17q.15.37.55.4l1.26.1q.4.03.1.29l-.96.83q-.31.26-.21.65l.29 1.23q.09.39-.25.18l-1.08-.66q-.34-.21-.68 0l-1.08.66q-.34.21-.25-.18l.29-1.23q.1-.39-.21-.65l-.96-.83q-.3-.26.1-.29l1.26-.1q.4-.03.55-.4l.49-1.17q.15-.37.3 0m-5.9 11.38l5.75-4.5l5.75 4.5m-11.5 4l5.75-4.5l5.75 4.5M5.5 21.25h13");
}
</style><path class="hpi-3-96m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:level-up"} {...others} />);
}

export default Component;
