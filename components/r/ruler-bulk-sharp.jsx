import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.owjh7hb_g {
  d: path("M15.707 6.293a.999.999 0 1 1-1.414 1.414l-2-2a.999.999 0 1 1 1.414-1.414Zm-4 4a.999.999 0 1 1-1.414 1.414l-2-2a.999.999 0 1 1 1.414-1.414Zm-4 4a.999.999 0 1 1-1.414 1.414l-2-2a.999.999 0 1 1 1.414-1.414Z");
}

.yewtmybxj {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m2.293 14.293l12-12a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414");
}
</style><g class="cuyn6tgcc"><path class="yewtmybxj"/><path class="owjh7hb_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ruler-bulk-sharp"} {...others} />);
}

export default Component;
