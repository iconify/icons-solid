import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ole7zcctq {
  fill: currentColor;
  d: path("M15 17.192L6.846 12L15 6.808zm-1-1.842v-6.7L8.711 12z");
}
</style><path class="ole7zcctq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrow-back-2-outline"} {...others} />);
}

export default Component;
