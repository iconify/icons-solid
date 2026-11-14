import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i97e7pbdo {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.5 5.25h13q1.76 0 3.005 1.245T22.75 9.5v5q0 1.76-1.245 3.005T18.5 18.75h-13q-1.76 0-3.005-1.245T1.25 14.5v-5q0-1.76 1.245-3.005T5.5 5.25");
}
</style><path class="i97e7pbdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:one-way-sign"} {...others} />);
}

export default Component;
