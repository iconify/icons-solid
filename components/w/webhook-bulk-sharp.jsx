import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.icg3rkbvd {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9 7v10a1 1 0 0 1-2 0V7a5 5 0 0 1 10 0a1 1 0 0 1-2 0a3 3 0 1 0-6 0");
}

.lv4nk39dn {
  d: path("M16 14h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v5h3a5 5 0 0 1 0 10a1 1 0 0 1 0-2a3 3 0 1 0 0-6m-4 2h4a1 1 0 0 1 0 2h-3.099A5.002 5.002 0 0 1 3 17a1 1 0 0 1 2 0a3 3 0 1 0 6 0a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="icg3rkbvd"/><path class="lv4nk39dn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:webhook-bulk-sharp"} {...others} />);
}

export default Component;
