import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.iiq2igqej {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M14 6a4 4 0 0 1 8 0v4a4 4 0 0 1-8 0Z");
}

.vsw713wlp {
  d: path("M4 8v4a3 3 0 0 0 3 3h3a1 1 0 0 1 0 2H7a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h4a1 1 0 0 1 0 2H7a3.004 3.004 0 0 0-3 3m11.707 9.707L14.414 19l1.293 1.293a.999.999 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a.999.999 0 1 1 1.414 1.414m4-1.414l2 2a1 1 0 0 1 0 1.414l-2 2a.999.999 0 1 1-1.414-1.414L19.586 19l-1.293-1.293a.999.999 0 1 1 1.414-1.414");
}
</style><g class="cuyn6tgcc"><path class="iiq2igqej"/><path class="vsw713wlp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:devices-code-corner-bulk-round"} {...others} />);
}

export default Component;
