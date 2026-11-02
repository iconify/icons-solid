import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cg-5c-bus {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 21a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3h2a5 5 0 0 1 0 10Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.ui07j7_ju {
  d: path("M12 3h4a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1M2 20v-8a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2H4v3a1 1 0 0 1-2 0m10-5h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m4 0h.01a1 1 0 0 1 0 2H16a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="cg-5c-bus"/><path class="ui07j7_ju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:submarine-bulk-sharp"} {...others} />);
}

export default Component;
