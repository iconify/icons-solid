import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.bsnj6yb-d {
  fill: currentColor;
  d: path("M8.5 3a.5.5 0 0 1 0 1H4.707L12 11.293V7.5a.5.5 0 0 1 1 0v4.9a.6.6 0 0 1-.6.6H7.5a.5.5 0 0 1 0-1h3.793L4 4.707V8.5a.5.5 0 0 1-1 0V3.6a.6.6 0 0 1 .6-.6z");
}
</style><path class="bsnj6yb-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-maximize-top-left-bottom-right-16-regular"} {...others} />);
}

export default Component;
