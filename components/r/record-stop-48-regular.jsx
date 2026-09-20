import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i__zm4b8v {
  fill: currentColor;
  d: path("M17 15a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V17a2 2 0 0 0-2-2zm27 9c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-2.5 0c0-9.665-7.835-17.5-17.5-17.5S6.5 14.335 6.5 24S14.335 41.5 24 41.5S41.5 33.665 41.5 24");
}
</style><path class="i__zm4b8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:record-stop-48-regular"} {...others} />);
}

export default Component;
