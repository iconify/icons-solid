import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.sk3vxynpp {
  fill: currentColor;
  d: path("M4 3a1 1 0 0 1 1 1v17a2 2 0 0 0 2 2h17a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V4a1 1 0 0 1 1-1m19.002 6.412V12a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1h-5a1 1 0 1 0 0 2h2.584L16.5 13.086l-2.293-2.293a1 1 0 0 0-1.414 0l-5.5 5.5a1 1 0 1 0 1.414 1.414l4.793-4.793l2.293 2.293a1 1 0 0 0 1.414 0z");
}
</style><path class="sk3vxynpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:data-trending-28-filled"} {...others} />);
}

export default Component;
