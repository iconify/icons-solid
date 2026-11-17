import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.dk_f1ab0x {
  d: path("M14 18h4V6H6v4a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2m-4 2a1 1 0 0 1-2 0v-2.586l-4.293 4.293a.999.999 0 1 1-1.414-1.414L6.586 16H4a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1Z");
}

.zt34abcdg {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 19V5h14v14Z");
}
</style><g class="cuyn6tgcc"><path class="zt34abcdg"/><path class="dk_f1ab0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:external-link-alt-bulk-sharp"} {...others} />);
}

export default Component;
