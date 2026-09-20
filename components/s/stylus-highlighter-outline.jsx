import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pe8hjvlhz {
  fill: currentColor;
  d: path("M7 16V5q0-.825.588-1.412T9 3q.225 0 .45.05t.425.15l6 2.975q.5.25.813.738T17 7.975V16zm2-2h6V7.975L9 5zm-5 7l.55-1.625q.2-.625.725-1T6.45 18h11.1q.65 0 1.175.375t.725 1L20 21zm5-7h6z");
}
</style><path class="pe8hjvlhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stylus-highlighter-outline"} {...others} />);
}

export default Component;
