import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ap7mpbb3g {
  fill: currentColor;
  d: path("M7 6V4q0-.825.588-1.412T9 2h6q.825 0 1.413.588T17 4v2h3q.825 0 1.413.588T22 8v11q0 .825-.587 1.413T20 21H4q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6zm2 0h6V4H9zM4 17h16v-3H4z");
}
</style><path class="ap7mpbb3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:card-travel"} {...others} />);
}

export default Component;
