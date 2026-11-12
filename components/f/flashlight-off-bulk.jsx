import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.k1jpp7b_t {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m15.707 8.293l2 2a2.414 2.414 0 0 1 0 3.414l-3 3A1 1 0 0 1 14 17h-2.586l-3.707 3.707a2.414 2.414 0 0 1-3.414 0l-1-1a2.414 2.414 0 0 1 0-3.414L7 12.586V10c0-.265.105-.52.293-.707l3-3a2.414 2.414 0 0 1 3.414 0Z");
}

.v800_2rhu {
  d: path("m9.707 8.293l6 6a.999.999 0 1 1-1.414 1.414l-6-6a.999.999 0 1 1 1.414-1.414");
}
</style><g class="cuyn6tgcc"><path class="k1jpp7b_t"/><path class="v800_2rhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flashlight-off-bulk"} {...others} />);
}

export default Component;
