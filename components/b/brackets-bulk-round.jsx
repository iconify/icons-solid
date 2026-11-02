import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.id3zm3bbq {
  fill: currentColor;
  d: path("M6 8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a1 1 0 0 1 0 2H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1a1 1 0 0 1 0 2Zm12-2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-1a1 1 0 0 1 0-2h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1a1 1 0 0 1 0-2Z");
}
</style><path class="id3zm3bbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:brackets-bulk-round"} {...others} />);
}

export default Component;
