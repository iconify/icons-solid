import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.okh0g4bfk {
  fill: currentColor;
  d: path("m12.75 4l.102.007a.75.75 0 0 1 .648.743l-.007.102a.75.75 0 0 1-.743.648H6.562L22.5 21.439V15.25l.007-.102A.75.75 0 0 1 24 15.25v8l-.007.102a.75.75 0 0 1-.743.648h-8l-.102-.007a.75.75 0 0 1-.648-.743l.007-.102a.75.75 0 0 1 .743-.648h6.19L5.5 6.56v6.19l-.007.102A.75.75 0 0 1 4 12.75v-8l.007-.102A.75.75 0 0 1 4.75 4z");
}
</style><path class="okh0g4bfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-maximize-top-left-bottom-right-28-regular"} {...others} />);
}

export default Component;
