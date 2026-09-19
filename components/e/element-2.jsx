import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wtypthf3u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.053 32.736V42.5L24 33.1L7.947 42.5v-9.764L24 23.336zm0-17.837v9.764L24 15.264l-16.053 9.4v-9.765L24 5.5z");
}
</style><path class="wtypthf3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:element-2"} {...others} />);
}

export default Component;
