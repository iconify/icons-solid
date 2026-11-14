import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b2nr67kea {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0M6.5 9v6l-2 6.5m2-6.5l2 6.5m-2-11l6.5.5m-1 10.5L13 11h7l1 10.5m-8.5-5.25h8");
}
</style><path class="b2nr67kea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:person-walker-frame"} {...others} />);
}

export default Component;
