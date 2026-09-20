import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.xraoffbvd {
  fill: currentColor;
  d: path("M14 3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM7.5 9a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m4 .5a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 1 0V10a.5.5 0 0 0-.5-.5m2-1a.5.5 0 0 0-.5.5v4.5a.5.5 0 0 0 1 0V9a.5.5 0 0 0-.5-.5m-6 1.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M6 6a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1z");
}
</style><path class="xraoffbvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-infographic-20-filled"} {...others} />);
}

export default Component;
