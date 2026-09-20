import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.rt6l2dbld {
  fill: currentColor;
  d: path("M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8m5-1a.75.75 0 1 1-1.5 0A.75.75 0 0 1 7 7m3.5 0A.75.75 0 1 1 9 7a.75.75 0 0 1 1.5 0M6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1");
}
</style><path class="rt6l2dbld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:emoji-meh-16-filled"} {...others} />);
}

export default Component;
