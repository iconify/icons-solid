import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j5ttez39r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11 43.5l8.5-4l9-12l8.5-4v-19l-8.5 4l-9 12l-8.5 4zm8.5-23v19m9-31v19");
}
</style><path class="j5ttez39r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:smbc"} {...others} />);
}

export default Component;
