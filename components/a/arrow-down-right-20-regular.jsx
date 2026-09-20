import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.gs-hhuboj {
  fill: currentColor;
  d: path("M8.5 16a.5.5 0 0 0 0 1h8a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-1 0v6.793L3.854 3.146a.5.5 0 1 0-.708.708L15.293 16z");
}
</style><path class="gs-hhuboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-down-right-20-regular"} {...others} />);
}

export default Component;
