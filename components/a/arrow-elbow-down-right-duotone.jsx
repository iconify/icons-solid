import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cj6rvqbix {
  d: path("m216 176l-48 48v-96Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.r4kdcvjzr {
  d: path("m221.66 170.34l-48-48A8 8 0 0 0 160 128v40H80V32a8 8 0 0 0-16 0v144a8 8 0 0 0 8 8h88v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32M176 204.69v-57.38L204.69 176Z");
}
</style><g class="cuyn6tgcc"><path class="cj6rvqbix"/><path class="r4kdcvjzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-down-right-duotone"} {...others} />);
}

export default Component;
