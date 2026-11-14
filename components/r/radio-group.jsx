import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.imqbe7r7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5a2.25 2.25 0 1 0 4.5 0A2.25 2.25 0 1 0 3 5m1 7a1.25 1.25 0 1 0 2.5 0A1.25 1.25 0 1 0 4 12m-1 7a2.25 2.25 0 1 0 4.5 0A2.25 2.25 0 1 0 3 19m7.5-14h10m-10 7h10m-10 7H17");
}
</style><path class="imqbe7r7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:radio-group"} {...others} />);
}

export default Component;
