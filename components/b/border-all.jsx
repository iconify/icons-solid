import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b84_blbea {
  fill: currentColor;
  d: path("M12.5 20v-7.5H20V20zm0-8.5V4H20v7.5zm-8.5 0V4h7.5v7.5zM4 20v-7.5h7.5V20z");
}
</style><path class="b84_blbea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:border-all"} {...others} />);
}

export default Component;
