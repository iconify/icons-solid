import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yu3uyccan {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 8a2.25 5.5 0 1 0 4.5 0a2.25 5.5 0 1 0-4.5 0M12 13.5v8m-9.5-11a2.25 4.5 0 1 0 4.5 0a2.25 4.5 0 1 0-4.5 0M4.75 15v6.5M17 10.5a2.25 4.5 0 1 0 4.5 0a2.25 4.5 0 1 0-4.5 0m2.25 4.5v6.5");
}
</style><path class="yu3uyccan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tree-grove"} {...others} />);
}

export default Component;
