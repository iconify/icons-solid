import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ci78ymb8g {
  fill: currentColor;
  d: path("M17 3.507A.5.5 0 0 0 16.5 3h-8a.5.5 0 0 0 0 1h6.793l-2.147 2.146a.5.5 0 0 0 .708.708L16 4.707V11.5a.5.5 0 1 0 1 0zM6.854 13.854a.5.5 0 0 0-.708-.708l-3 3a.5.5 0 0 0 .708.708zm5-5.708a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0");
}
</style><path class="ci78ymb8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-up-right-dashes-20-regular"} {...others} />);
}

export default Component;
