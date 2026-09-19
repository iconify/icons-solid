import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bgg3lzb8l {
  fill: currentColor;
  d: path("M21 3h-3V1h-2v2H8V1H6v2H3v18h18zm-2 16H5V8h14zM7 10h5v5H7z");
}
</style><path class="bgg3lzb8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-today"} {...others} />);
}

export default Component;
