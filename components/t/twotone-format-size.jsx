import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e1c1fvm9g {
  fill: currentColor;
  d: path("M3 12h3v7h3v-7h3V9H3zm6-5h5v12h3V7h5V4H9z");
}
</style><path class="e1c1fvm9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-format-size"} {...others} />);
}

export default Component;
