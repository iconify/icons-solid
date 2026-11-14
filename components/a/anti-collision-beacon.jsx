import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w9n4lfdgz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 16v-4a4 4 0 0 1 8 0v4Zm-.75 0h9.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 7.25 16M12 2.5v2m-7 1L6.5 7M19 5.5L17.5 7m-15 5h2m15 0h2");
}
</style><path class="w9n4lfdgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:anti-collision-beacon"} {...others} />);
}

export default Component;
