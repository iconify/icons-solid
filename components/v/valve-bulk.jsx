import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.hixl5jbzs {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 11h4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1");
}

.wpr5olssl {
  d: path("M15 4a1 1 0 0 1 0 2h-2v3a1 1 0 0 1-2 0V6H9a1 1 0 0 1 0-2ZM2 18v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0m18 0v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0");
}
</style><g class="cuyn6tgcc"><path class="hixl5jbzs"/><path class="wpr5olssl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:valve-bulk"} {...others} />);
}

export default Component;
