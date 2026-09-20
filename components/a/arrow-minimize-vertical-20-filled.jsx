import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.hhonbjoff {
  fill: currentColor;
  d: path("M9.75 1.5a.75.75 0 0 1 .75.75v2.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72V2.25a.75.75 0 0 1 .75-.75M3.5 9.75A.75.75 0 0 1 4.25 9h11a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.75-.75m8.78 4.47l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 1 0 1.06 1.06l.72-.72v2.69a.75.75 0 0 0 1.5 0v-2.69l.72.72a.75.75 0 1 0 1.06-1.06");
}
</style><path class="hhonbjoff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-minimize-vertical-20-filled"} {...others} />);
}

export default Component;
