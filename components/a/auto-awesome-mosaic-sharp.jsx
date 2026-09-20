import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z8b3xebcf {
  fill: currentColor;
  d: path("M11 20H4V4h7zm2-9V4h7v7zm0 9v-7h7v7z");
}
</style><path class="z8b3xebcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:auto-awesome-mosaic-sharp"} {...others} />);
}

export default Component;
