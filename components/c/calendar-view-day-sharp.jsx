import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jytbc-b3w {
  fill: currentColor;
  d: path("M4 19.385v-1h16v1zM4 16V8h16v8zM4 5.615v-1h16v1z");
}
</style><path class="jytbc-b3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:calendar-view-day-sharp"} {...others} />);
}

export default Component;
