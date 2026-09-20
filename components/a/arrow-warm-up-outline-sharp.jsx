import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jwwqzft8o {
  fill: currentColor;
  d: path("m11.5 4.864l-5.158 5.152l-.688-.689L12 2.981l6.346 6.346l-.688.714L12.5 4.883V12h-1zM11.5 17v-3h1v3zm0 4v-2h1v2z");
}
</style><path class="jwwqzft8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrow-warm-up-outline-sharp"} {...others} />);
}

export default Component;
