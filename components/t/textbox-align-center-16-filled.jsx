import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.pwjc27bgr {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zm1 4h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1m1 3h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1");
}
</style><path class="pwjc27bgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:textbox-align-center-16-filled"} {...others} />);
}

export default Component;
