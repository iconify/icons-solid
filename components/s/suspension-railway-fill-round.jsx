import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kseg36x3e {
  fill: currentColor;
  d: path("M21 3a1 1 0 0 1 0 2h-5v3h1c.265 0 .52.105.707.293l4 4A1 1 0 0 1 22 13v5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-6a4 4 0 0 1 4-4V5H3a1 1 0 0 1 0-2Zm-7 2H8v3h6Zm-8 5c-.527 0-1.028.204-1.402.574l-.001.001A2 2 0 0 0 4 12v3h6v-5Zm6 5h8v-1.586L16.586 10H12Z");
}
</style><path class="kseg36x3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:suspension-railway-fill-round"} {...others} />);
}

export default Component;
