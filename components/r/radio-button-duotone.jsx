import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.hocvxubud {
  d: path("M176 128a48 48 0 1 1-48-48a48 48 0 0 1 48 48");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ynh679bly {
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m0-144a56 56 0 1 0 56 56a56.06 56.06 0 0 0-56-56m0 96a40 40 0 1 1 40-40a40 40 0 0 1-40 40");
}
</style><g class="cuyn6tgcc"><path class="hocvxubud"/><path class="ynh679bly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:radio-button-duotone"} {...others} />);
}

export default Component;
