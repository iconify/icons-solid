import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.arpgl49yd {
  fill: currentColor;
  d: path("m5 10.41l7 7l9-9L19.59 7L12 14.59L6.41 9H11V7H3v8h2z");
}
</style><path class="arpgl49yd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-call-missed"} {...others} />);
}

export default Component;
