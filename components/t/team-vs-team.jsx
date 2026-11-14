import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.im02wob5v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 6l4 1.5v4c0 3-1.75 5.25-4 6.5c-2.25-1.25-4-3.5-4-6.5v-4Zm11 0l4 1.5v4c0 3-1.75 5.25-4 6.5c-2.25-1.25-4-3.5-4-6.5v-4Zm-11 3.75v4.5m11-2.75h.01");
}
</style><path class="im02wob5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:team-vs-team"} {...others} />);
}

export default Component;
