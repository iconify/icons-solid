import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l_xlqw16v {
  fill: currentColor;
  d: path("M16 6h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-1.171a3 3 0 0 1-5.658 0h-.342a3 3 0 0 1-5.658 0H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm-2 0V4h-4v2ZM9.705 19.709l.002-.002l.002-.002a1 1 0 0 0-.002-1.412l-.002-.002a1 1 0 1 0 0 1.418m4.588-.002l.002.002a1 1 0 1 0 0-1.418l-.002.002l-.002.002a1 1 0 0 0 .002 1.412");
}
</style><path class="l_xlqw16v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:luggage-fill-sharp"} {...others} />);
}

export default Component;
