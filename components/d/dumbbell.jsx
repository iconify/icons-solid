import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eww9gwb1h {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.629 5.629q.878-.879 2.121-.879q3 0 3 3v3.5h6.5v-3.5q0-3 3-3q1.243 0 2.121.879q.879.878.879 2.121v8.5q0 1.243-.879 2.121q-.878.879-2.121.879q-3 0-3-3v-3.5h-6.5v3.5q0 3-3 3t-3-3v-8.5q0-1.243.879-2.121");
}
</style><path class="eww9gwb1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:dumbbell"} {...others} />);
}

export default Component;
