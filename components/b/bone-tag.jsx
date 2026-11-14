import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sj-8llbed {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 13.75h10a2.25 2.25 0 1 1 2.5 1.75a2.25 2.25 0 1 1-2.5 1.75H7a2.25 2.25 0 1 1-2.5-1.75A2.25 2.25 0 1 1 7 13.75M9.5 7a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M12 9.5v4.25");
}
</style><path class="sj-8llbed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bone-tag"} {...others} />);
}

export default Component;
