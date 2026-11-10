import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gsdiqtb9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 29.469v8.382m7.4-14.392v10.114m7.4-16.426v22.47m7.4-31.235v22.285m7.4-11.788v17.67m7.4-23.366v17.391");
}
</style><path class="gsdiqtb9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ispeed"} {...others} />);
}

export default Component;
