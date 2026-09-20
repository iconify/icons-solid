import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.oy-iiac9c {
  fill: currentColor;
  d: path("M4.5 7a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9M3 9a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4A.5.5 0 0 0 3 9m3 0a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4A.5.5 0 0 0 6 9m3-9a7 7 0 0 1 .404 13.987q.253-.496.403-1.044a5.999 5.999 0 1 0-6.751-6.75a5.5 5.5 0 0 0-1.044.402A7 7 0 0 1 9 0m-.5 3a.5.5 0 0 1 .5.5V7h2.5a.5.5 0 0 1 0 1H8.742A5.5 5.5 0 0 0 8 7.257V3.5a.5.5 0 0 1 .5-.5");
}
</style><path class="oy-iiac9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:clock-pause-16-regular"} {...others} />);
}

export default Component;
