import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.eb0-jrb4u {
  d: path("M224 64a32 32 0 1 0-40 31v17a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V95a32 32 0 1 0-16 0v17a24 24 0 0 0 24 24h40v25a32 32 0 1 0 16 0v-25h40a24 24 0 0 0 24-24V95a32.06 32.06 0 0 0 24-31M48 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16m96 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48-112a16 16 0 1 1 16-16a16 16 0 0 1-16 16");
}

.z7jh16tru {
  d: path("M88 64a24 24 0 1 1-24-24a24 24 0 0 1 24 24m104-24a24 24 0 1 0 24 24a24 24 0 0 0-24-24");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="z7jh16tru"/><path class="eb0-jrb4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:git-fork-duotone"} {...others} />);
}

export default Component;
