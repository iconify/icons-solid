import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dmww7ihsb {
  fill: currentColor;
  d: path("M10 20V4h1v16zm3.385-4.365v-7.25L16.865 12z");
}
</style><path class="dmww7ihsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrow-menu-open-outline"} {...others} />);
}

export default Component;
