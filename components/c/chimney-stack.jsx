import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ihvnakbha {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4.5h3.5A1.5 1.5 0 0 1 10 6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 6A1.5 1.5 0 0 1 5 4.5m-.5 3v14H9v-14m5.75 0A1.75 1.75 0 0 1 16 4.25a2.5 2.5 0 0 1 4.5 0a1.75 1.75 0 0 1 0 3.25Z");
}
</style><path class="ihvnakbha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chimney-stack"} {...others} />);
}

export default Component;
