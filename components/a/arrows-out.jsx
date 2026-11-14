import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oyrblfx8s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12h.01M9 9L3.5 3.5m0 4v-4h4M15 9l5.5-5.5m-4 0h4v4M15 15l5.5 5.5m0-4v4h-4M9 15l-5.5 5.5m4 0h-4v-4");
}
</style><path class="oyrblfx8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:arrows-out"} {...others} />);
}

export default Component;
