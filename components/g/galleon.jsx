import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m9rvx9bcp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h3v4h16L19 20H5l-2.5-5Zm6-7H13q.75 3.5 0 7H8.5q.75-3.5 0-7M16 5h4.5q.75 3 0 6H16q.75-3 0-6m-5.25 6v4m7.5-4v4");
}
</style><path class="m9rvx9bcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:galleon"} {...others} />);
}

export default Component;
