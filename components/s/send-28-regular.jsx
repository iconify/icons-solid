import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.dtt_6ibqf {
  fill: currentColor;
  d: path("M2.043 4.076c-.275-1.03.783-1.91 1.746-1.451l21.498 10.249c.949.452.949 1.804 0 2.256L3.788 25.38c-.963.458-2.021-.422-1.746-1.452L4.7 14.002zm4.008 10.676l-2.418 9.04l20.535-9.79l-20.535-9.79l2.418 9.04H17.25a.75.75 0 0 1 0 1.5z");
}
</style><path class="dtt_6ibqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:send-28-regular"} {...others} />);
}

export default Component;
