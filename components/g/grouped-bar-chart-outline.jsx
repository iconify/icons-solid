import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrrewpbye {
  fill: currentColor;
  d: path("M5 19V8.712h3V19zm4.385 0v-5.654h3V19zM16 19V5h3v14z");
}
</style><path class="nrrewpbye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:grouped-bar-chart-outline"} {...others} />);
}

export default Component;
