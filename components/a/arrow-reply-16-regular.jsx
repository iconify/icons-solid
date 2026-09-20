import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.heajmgbnt {
  fill: currentColor;
  d: path("M6.354 3.646a.5.5 0 0 1 0 .708L3.707 7H8.5a5.5 5.5 0 0 1 5.5 5.5a.5.5 0 0 1-1 0A4.5 4.5 0 0 0 8.5 8H3.707l2.647 2.646a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0");
}
</style><path class="heajmgbnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-reply-16-regular"} {...others} />);
}

export default Component;
