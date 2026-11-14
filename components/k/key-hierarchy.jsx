import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uesbwz4mc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 3h2a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 13 8h-2a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 11 3M5.5 16h1A2.5 2.5 0 0 1 9 18.5A2.5 2.5 0 0 1 6.5 21h-1A2.5 2.5 0 0 1 3 18.5A2.5 2.5 0 0 1 5.5 16m12 0h1a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5h-1a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5M12 8v4m-6 4v-2.5A1.5 1.5 0 0 1 7.5 12h9a1.5 1.5 0 0 1 1.5 1.5V16");
}
</style><path class="uesbwz4mc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:key-hierarchy"} {...others} />);
}

export default Component;
