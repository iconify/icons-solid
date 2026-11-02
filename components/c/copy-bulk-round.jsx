import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.jahhv7bmc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 11a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5Z");
}

.t0qijpgme {
  d: path("M17 2a5 5 0 0 1 5 5v10a1 1 0 0 1-2 0V7a3 3 0 0 0-3-3H7a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="jahhv7bmc"/><path class="t0qijpgme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:copy-bulk-round"} {...others} />);
}

export default Component;
