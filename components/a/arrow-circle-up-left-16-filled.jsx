import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.jfql2jbgh {
  fill: currentColor;
  d: path("M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M5.5 5H10a.5.5 0 0 1 0 1H6.707l3.647 3.646a.5.5 0 0 1-.708.708L6 6.707V10a.5.5 0 0 1-1 0V5.5a.5.5 0 0 1 .5-.5");
}
</style><path class="jfql2jbgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-circle-up-left-16-filled"} {...others} />);
}

export default Component;
