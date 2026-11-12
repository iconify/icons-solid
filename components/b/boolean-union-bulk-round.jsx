import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wq_7myjag {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 2h8a3 3 0 0 1 3 3v2a.997.997 0 0 0 1 1h2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-2a.997.997 0 0 0-1-1H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3");
}
</style><path class="wq_7myjag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:boolean-union-bulk-round"} {...others} />);
}

export default Component;
