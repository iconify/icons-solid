import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.wrzdy7bcj {
  fill: currentColor;
  d: path("M8.5 7.52V4.5a1 1 0 1 0-2 0V8a1 1 0 0 0 .375.78l2.5 2a1 1 0 1 0 1.25-1.56zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8");
}
</style><path class="wrzdy7bcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:presence-away-16-regular"} {...others} />);
}

export default Component;
