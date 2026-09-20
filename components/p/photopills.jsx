import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.nsggzmbnu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 24.055v9.83a8.597 8.597 0 0 0 8.616 8.615h1.322a8.597 8.597 0 0 0 8.616-8.615v-9.83Z");
}

.xbcu0eb_g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h18.555v18.555H5.5zm18.555 0v18.555h9.83a8.597 8.597 0 0 0 8.615-8.616v-1.322A8.597 8.597 0 0 0 33.885 5.5Z");
}
</style><path class="xbcu0eb_g"/><path class="nsggzmbnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:photopills"} {...others} />);
}

export default Component;
