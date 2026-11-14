import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.afrcktbrk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.75 17.75V6.25q0-3-3-3t-3 3v11.5q0 1.243.879 2.121q.878.879 2.121.879t2.121-.879q.879-.878.879-2.121m2.5-11.5q0-3 3-3t3 3v11.5q0 1.243-.879 2.121q-.878.879-2.121.879t-2.121-.879q-.879-.878-.879-2.121z");
}
</style><path class="afrcktbrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:pause"} {...others} />);
}

export default Component;
