import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.b-u54qb9e {
  d: path("m237.66 133.66l-32 32a8 8 0 0 1-11.32-11.32L212.69 136H43.31l18.35 18.34a8 8 0 0 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32L43.31 120h169.38l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32");
}

.cuyn6tgcc {
  fill: currentColor;
}

.x_sketd0n {
  d: path("m232 128l-32 32H56l-32-32l32-32h144Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="x_sketd0n"/><path class="b-u54qb9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrows-horizontal-duotone"} {...others} />);
}

export default Component;
