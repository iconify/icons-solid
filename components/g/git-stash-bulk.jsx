import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.d3pj9kbkh {
  d: path("M11 8a1 1 0 0 1 2 0v4.586l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a.999.999 0 1 1 1.414-1.414L11 12.586Zm-7 6v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5a1 1 0 0 1 2 0v5a3.004 3.004 0 0 1-3 3H5a3.004 3.004 0 0 1-3-3v-5a1 1 0 0 1 2 0");
}

.dj-hugbqi {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0");
}
</style><g class="cuyn6tgcc"><path class="dj-hugbqi"/><path class="d3pj9kbkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:git-stash-bulk"} {...others} />);
}

export default Component;
