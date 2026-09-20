import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.it1feew2y {
  fill: currentColor;
  d: path("M5.007 4.5v1H4A1.5 1.5 0 0 0 2.5 7v1H5v-.5a.5.5 0 0 1 1 0V8h4v-.5a.5.5 0 0 1 1 0V8h2.5V7A1.5 1.5 0 0 0 12 5.5h-.993v-1a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5m1.5-.5h3a.5.5 0 0 1 .5.5v1h-4v-1a.5.5 0 0 1 .5-.5M13.5 9H11v.5a.5.5 0 0 1-1 0V9H6v.503a.5.5 0 0 1-1 0V9H2.5v2A1.5 1.5 0 0 0 4 12.5h8a1.5 1.5 0 0 0 1.5-1.5z");
}
</style><path class="it1feew2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:toolbox-16-filled"} {...others} />);
}

export default Component;
