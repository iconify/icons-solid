import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vx36jpz4y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 13.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0m13 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2.5 21v-.5c0-1.6 1.3-2.5 3-2.5s3 .9 3 2.5v.5m7 0v-.5c0-1.6 1.3-2.5 3-2.5s3 .9 3 2.5v.5M6 6h12M8.5 3.5L6 6l2.5 2.5m7-5L18 6l-2.5 2.5");
}
</style><path class="vx36jpz4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:people-arrows"} {...others} />);
}

export default Component;
