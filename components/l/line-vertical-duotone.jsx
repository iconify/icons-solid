import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.kbgxg_7rn {
  d: path("M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zkz5ybc8j {
  d: path("M136 24v208a8 8 0 0 1-16 0V24a8 8 0 0 1 16 0");
}
</style><g class="cuyn6tgcc"><path class="kbgxg_7rn"/><path class="zkz5ybc8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:line-vertical-duotone"} {...others} />);
}

export default Component;
