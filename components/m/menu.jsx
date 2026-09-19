import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hch983t8a {
  fill: currentColor;
  d: path("M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z");
}
</style><path class="hch983t8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:menu"} {...others} />);
}

export default Component;
