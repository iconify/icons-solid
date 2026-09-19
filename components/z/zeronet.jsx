import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.y78uvdbwa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 4.5l-13.73 7.92v15.86l6.44-3.75v-8.39L24 11.93l7.19 4.15l-20.92 12.2v7.3L24 43.5l13.73-7.93V19.72l-6.44 3.75v8.39L24 36.07l-7.19-4.15l20.92-12.2v-7.29Z");
}
</style><path class="y78uvdbwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:zeronet"} {...others} />);
}

export default Component;
