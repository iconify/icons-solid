import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ra1akebwb {
  fill: currentColor;
  d: path("M7 8V7a5 5 0 0 1 10 0v1h1a3 3 0 0 1 3 3a1 1 0 0 1-1 1h-8a.997.997 0 0 0-1 1v8a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Zm8-1a3 3 0 1 0-6 0v1h6Zm-2 14v-3c0-.265.105-.52.293-.707l4-4a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-4 4A1 1 0 0 1 17 22h-3a1 1 0 0 1-1-1");
}
</style><path class="ra1akebwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-edit-corner-fill"} {...others} />);
}

export default Component;
