import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ohmkwdbaz {
  fill: currentColor;
  d: path("M10 17.27v-1h10v1zm0-4.77v-1h10v1zM4 7.73v-1h16v1z");
}
</style><path class="ohmkwdbaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:segment-outline"} {...others} />);
}

export default Component;
