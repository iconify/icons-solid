import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.int5d5yju {
  fill: currentColor;
  d: path("M2.442 15.385q0-2.187 2.064-3.209t4.552-1.022t4.552 1.022t2.063 3.209zm0 3.307v-1h13.231v1zm0 3.308v-1h13.231v1zm15.231 0v-6.61q0-2.355-1.757-3.93q-1.758-1.575-4.16-2.064l-.429-3.011h4.615v-4h1v4h4.616L19.95 22z");
}
</style><path class="int5d5yju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:fastfood-sharp"} {...others} />);
}

export default Component;
