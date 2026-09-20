import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.wp4vjnwrs {
  fill: currentColor;
  d: path("M111.59 181.47A8 8 0 0 1 104 192H24a8 8 0 0 1-7.59-10.53l40-120a8 8 0 0 1 15.18 0ZM208 76a52 52 0 1 0-52 52a52.06 52.06 0 0 0 52-52m16 68h-88a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h88a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8");
}
</style><path class="wp4vjnwrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:shapes-fill"} {...others} />);
}

export default Component;
