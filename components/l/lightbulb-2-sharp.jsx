import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qmudjrg8b {
  fill: currentColor;
  d: path("M8.75 17.616v-3.558q-1.29-.84-2.02-2.174Q6 10.552 6 9.02q0-2.502 1.749-4.26T12 3t4.251 1.749T18 9q0 1.552-.73 2.882t-2.02 2.176v3.557zM9.673 21v-1h4.654v1z");
}
</style><path class="qmudjrg8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:lightbulb-2-sharp"} {...others} />);
}

export default Component;
