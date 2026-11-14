import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.po9losbsx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 9.001V17.5q0 1.76 1.245 3.005T6.5 21.75h11q1.76 0 3.005-1.245T21.75 17.5v-11q0-1.76-1.245-3.005T17.5 2.25h-11q-1.76 0-3.005 1.245T2.25 6.5z");
}
</style><path class="po9losbsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:trellis-panel"} {...others} />);
}

export default Component;
