import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iqeg2abbi {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 16a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h2a.997.997 0 0 0 1-1V9a1 1 0 0 1 1-1h2a.997.997 0 0 0 1-1V5a1 1 0 0 1 1-1h4a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1Z");
}
</style><path class="iqeg2abbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:stairs-bulk-round"} {...others} />);
}

export default Component;
