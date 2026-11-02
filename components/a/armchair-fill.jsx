import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ciqmf2bac {
  fill: currentColor;
  d: path("M5 8.171V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2.171A3 3 0 0 1 21 11v5c0 1.27-.803 2.405-2 2.829V20a1 1 0 0 1-2 0v-1H7v1a1 1 0 0 1-2 0v-1.171A3 3 0 0 1 3 16v-5c0-1.27.803-2.405 2-2.829M17 6a1 1 0 0 0-1-1H8a.997.997 0 0 0-1 1v2.171A3 3 0 0 1 9 11a.997.997 0 0 0 1 1h4a.997.997 0 0 0 1-1a3 3 0 0 1 2-2.829Z");
}
</style><path class="ciqmf2bac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:armchair-fill"} {...others} />);
}

export default Component;
