import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ha8lvbc5u {
  fill: currentColor;
  d: path("M10 23v-2H3V3h7V1h2v22zm-5-5h5v-6zm9 3v-9l5 6V5h-5V3h7v18z");
}
</style><path class="ha8lvbc5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:compare-sharp"} {...others} />);
}

export default Component;
