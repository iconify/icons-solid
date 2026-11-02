import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bbr2hgbrt {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M10 9v11a1 1 0 0 1-1 1H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v1Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.xzpcydfzu {
  d: path("M13 4v4h7a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h7V4a1 1 0 0 1 2 0M9 14a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Zm12 1a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="bbr2hgbrt"/><path class="xzpcydfzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:table-minus-corner-bulk-round"} {...others} />);
}

export default Component;
