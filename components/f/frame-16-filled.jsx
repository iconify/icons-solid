import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.l7w3_vbip {
  fill: currentColor;
  d: path("M3.5 1a.5.5 0 0 1 .5.5V3h8V1.5a.5.5 0 0 1 1 0V3h1.5a.5.5 0 0 1 0 1H13v8h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V13H4v1.5a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H3V4H1.5a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .5-.5");
}
</style><path class="l7w3_vbip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:frame-16-filled"} {...others} />);
}

export default Component;
