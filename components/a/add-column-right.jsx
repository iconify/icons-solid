import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qfo0fvwhf {
  fill: currentColor;
  d: path("M3 20V4h7.558v16zm8.558 0V4H19v3.139q-.125-.012-.244-.018t-.256-.005q-2.027 0-3.456 1.42Q13.615 9.959 13.615 12t1.43 3.464q1.428 1.42 3.455 1.42q.134 0 .25-.015t.25-.027V20zM18 14.5v-2h-2v-1h2v-2h1v2h2v1h-2v2z");
}
</style><path class="qfo0fvwhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:add-column-right"} {...others} />);
}

export default Component;
