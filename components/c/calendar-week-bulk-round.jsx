import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b2311_gcp {
  d: path("M9 5a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm8 0a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm3 3a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2ZM8 15h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.rovwibb1o {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 9a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="rovwibb1o"/><path class="b2311_gcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:calendar-week-bulk-round"} {...others} />);
}

export default Component;
