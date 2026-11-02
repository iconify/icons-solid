import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wxhfi6btr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m5.256 7.204l6 3.5a1.5 1.5 0 0 1 0 2.592l-6 3.5A1.5 1.5 0 0 1 3 15.5v-7a1.5 1.5 0 0 1 2.256-1.296m9 0l6 3.5a1.5 1.5 0 0 1 0 2.592l-6 3.5A1.5 1.5 0 0 1 12 15.5v-7a1.5 1.5 0 0 1 2.256-1.296");
}
</style><path class="wxhfi6btr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fast-forward"} {...others} />);
}

export default Component;
