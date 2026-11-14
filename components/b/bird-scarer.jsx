import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j_uygfblr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8.5v-6a3 3 0 0 1 0 6m0 0h6a3 3 0 0 1-6 0m0 0v6a3 3 0 0 1 0-6m0 0H6a3 3 0 0 1 6 0m0 6v7");
}
</style><path class="j_uygfblr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bird-scarer"} {...others} />);
}

export default Component;
