import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.upur-bttk {
  fill: currentColor;
  d: path("M4 14.692h16V7.116H4zm-1 1V6.116h18v9.576h-2v1.27h-1v-1.27H6v1.27H5v-1.27zm1-1V7.116zm13.682-2.626q.434-.433.434-1.066t-.434-1.066t-1.066-.434t-1.067.434q-.433.433-.433 1.066t.433 1.066t1.067.434t1.066-.434M6.385 12.5h6.461v-3H6.385z");
}
</style><path class="upur-bttk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:audio-video-receiver-outline-sharp"} {...others} />);
}

export default Component;
