import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.gr1zn9b6w {
  fill: currentColor;
  d: path("M19.866 7.866a1.25 1.25 0 0 1 1.768 0l7 7a1.25 1.25 0 0 1 0 1.768l-7 7a1.25 1.25 0 1 1-1.768-1.768L24.732 17H7.267l4.867 4.866a1.25 1.25 0 0 1-1.768 1.768l-7-7a1.25 1.25 0 0 1 0-1.768l7-7a1.25 1.25 0 1 1 1.768 1.768L7.267 14.5h17.465l-4.866-4.866a1.25 1.25 0 0 1 0-1.768");
}
</style><path class="gr1zn9b6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-bidirectional-left-right-32-filled"} {...others} />);
}

export default Component;
