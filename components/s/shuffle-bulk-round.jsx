import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b9zppubsu {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9.707 8.293a.999.999 0 1 1-1.414 1.414l-6-6a.999.999 0 1 1 1.414-1.414ZM18.586 20l-4.293-4.293a.999.999 0 1 1 1.414-1.414L20 18.586V15a1 1 0 0 1 2 0v6a.997.997 0 0 1-1 1h-6a1 1 0 0 1 0-2Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.xcsyzkn5w {
  d: path("M22 3v6a1 1 0 0 1-2 0V5.414L3.707 21.707a.999.999 0 1 1-1.414-1.414L18.586 4H15a1 1 0 0 1 0-2h6a.997.997 0 0 1 1 1");
}
</style><g class="cuyn6tgcc"><path class="b9zppubsu"/><path class="xcsyzkn5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shuffle-bulk-round"} {...others} />);
}

export default Component;
