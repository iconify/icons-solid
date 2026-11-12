import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.efuovnbct {
  fill: currentColor;
  d: path("M19 10h-9v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h8c.265 0 .52.105.707.293l6 6A1 1 0 0 1 19 10m-6-6v4h4Zm3 9v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0m4 0v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0");
}
</style><path class="efuovnbct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:file-pause-corner-fill-sharp"} {...others} />);
}

export default Component;
