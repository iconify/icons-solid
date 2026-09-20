import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.ntc1rib5p {
  fill: currentColor;
  d: path("M3 4a1.5 1.5 0 0 1 1.5-1.5h8A1.5 1.5 0 0 1 14 4v5a1.5 1.5 0 0 1-1.5 1.5h-4v-1h4A.5.5 0 0 0 13 9V4a.5.5 0 0 0-.5-.5h-8A.5.5 0 0 0 4 4h-.5q-.26 0-.5.063zm11.5 8.5h-6v-1h6a.5.5 0 0 1 0 1m-10 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-3-6A1.5 1.5 0 0 1 3 5h3a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 6 14H3a1.5 1.5 0 0 1-1.5-1.5zM3 6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6A.5.5 0 0 0 6 6z");
}
</style><path class="ntc1rib5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:phone-laptop-16-regular"} {...others} />);
}

export default Component;
