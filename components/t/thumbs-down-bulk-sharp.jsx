import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.d-iyvb-eu {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 15H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16c.446 0 .839.296.962.725l2 7Q22 9.86 22 10v4a1 1 0 0 1-1 1h-5v4a3 3 0 1 1-6 0v-1a3 3 0 0 0-3-3");
}

.guqj8dcvz {
  d: path("M2 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm2 10h2V4H4Z");
}
</style><g class="cuyn6tgcc"><path class="d-iyvb-eu"/><path class="guqj8dcvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:thumbs-down-bulk-sharp"} {...others} />);
}

export default Component;
