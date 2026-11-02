import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.xdlono2po {
  d: path("M16.293 2.293a.999.999 0 1 1 1.414 1.414l-14 14a.999.999 0 1 1-1.414-1.414Zm4 4a.999.999 0 1 1 1.414 1.414l-14 14a.999.999 0 1 1-1.414-1.414Z");
}

.y8cilttfq {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m15.707 4.293l6 6a.999.999 0 1 1-1.414 1.414l-8-8a.999.999 0 1 1 1.414-1.414Zm-5 5l6 6a.999.999 0 1 1-1.414 1.414l-8-8a.999.999 0 1 1 1.414-1.414Zm-5 5l6 6a.999.999 0 1 1-1.414 1.414l-8-8a.999.999 0 1 1 1.414-1.414Z");
}
</style><g class="cuyn6tgcc"><path class="y8cilttfq"/><path class="xdlono2po"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:train-track-bulk"} {...others} />);
}

export default Component;
