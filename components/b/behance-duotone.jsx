import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.pb6sry5oo {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 13h6a3 3 0 0 0-6 0v2a3 3 0 0 0 3 3c1 0 1.6-.4 2-1M16 6h4M3 18V6h3a3 3 0 0 1 0 6H3m0 0h4a3 3 0 0 1 0 6H3");
}

.zdleg1rtd {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 6a3 3 0 1 1 0 6h1a3 3 0 1 1 0 6H3V6Zm15 7h-6a3 3 0 1 1 6 0");
}
</style><g class="ft5dv1b6b"><path class="zdleg1rtd"/><path class="pb6sry5oo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:behance-duotone"} {...others} />);
}

export default Component;
