import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xz9akfbmx {
  fill: currentColor;
  d: path("M2 11a3 3 0 0 1 3-3h3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm17 3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-8a.997.997 0 0 0-1 1v3h3a3 3 0 0 1 3 3v3Z");
}
</style><path class="xz9akfbmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:copy-alt-1-fill"} {...others} />);
}

export default Component;
