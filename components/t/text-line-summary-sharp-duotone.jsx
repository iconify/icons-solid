import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c0uuu2bno {
  d: path("M4 2V17.75H18.471L17.6 16.93L18.967 15.47L21.684 18.02C21.885 18.21 22 18.47 22 18.75C22 19.03 21.885 19.29 21.684 19.48L18.994 22L17.627 20.54L18.249 19.96L18.471 19.75H3C2.448 19.75 2 19.3 2 18.75V2H4Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.haunsr1qn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 2V17.75H18.471L17.6 16.93L18.967 15.47L21.684 18.02C21.885 18.21 22 18.47 22 18.75C22 19.03 21.885 19.29 21.684 19.48L18.994 22L17.627 20.54L18.249 19.96L18.471 19.75H3C2.448 19.75 2 19.3 2 18.75V2H4Z");
}

.vz7qhlb5x {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M15 12V14H6V12H15ZM22 7V9H6V7H22ZM22 2V4H6V2H22Z");
}
</style><g class="cuyn6tgcc"><path class="haunsr1qn"/><path class="vz7qhlb5x"/><path class="c0uuu2bno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:text-line-summary-sharp-duotone"} {...others} />);
}

export default Component;
