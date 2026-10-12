import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fxfgjucoh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.75H13q1.75 0 1.75 1.75V12q0 1.75 1.64 2.35l2.22.8q1.64.6 1.64 2.35v2q0 1.75-1.75 1.75h-10q-1.75 0-1.75-1.75v-15q0-1.75 1.75-1.75m-1.75 4h8m-8 4h8");
}
</style><path class="fxfgjucoh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:leg-cast"} {...others} />);
}

export default Component;
