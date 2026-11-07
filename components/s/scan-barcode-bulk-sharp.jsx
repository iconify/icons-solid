import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.d2rzqrb0o {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 16a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0Zm5 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0Zm5 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0Z");
}

.mt_z35blb {
  d: path("M2 3a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H4v3a1 1 0 0 1-2 0Zm19-1a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V4h-3a1 1 0 0 1 0-2ZM3 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2Zm19-1a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="d2rzqrb0o"/><path class="mt_z35blb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:scan-barcode-bulk-sharp"} {...others} />);
}

export default Component;
