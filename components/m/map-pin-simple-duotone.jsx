import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.bynl4vb5x {
  d: path("M184 72a56 56 0 1 0-64 55.42V232a8 8 0 0 0 16 0V127.42A56.09 56.09 0 0 0 184 72m-56 40a40 40 0 1 1 40-40a40 40 0 0 1-40 40");
}

.cuyn6tgcc {
  fill: currentColor;
}

.y413owpnj {
  d: path("M176 72a48 48 0 1 1-48-48a48 48 0 0 1 48 48");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="y413owpnj"/><path class="bynl4vb5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:map-pin-simple-duotone"} {...others} />);
}

export default Component;
