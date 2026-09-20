import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.pq40fwlyo {
  fill: currentColor;
  d: path("M8 10.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m.75-8.75a.75.75 0 0 0-1.5 0v1.306A5 5 0 0 0 3.056 7.25H1.75a.75.75 0 0 0 0 1.5h1.306a5 5 0 0 0 4.194 4.194v1.306a.75.75 0 0 0 1.5 0v-1.306a5 5 0 0 0 4.194-4.194h1.306a.75.75 0 0 0 0-1.5h-1.306A5 5 0 0 0 8.75 3.056zM8 11.5a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7");
}
</style><path class="pq40fwlyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:my-location-16-filled"} {...others} />);
}

export default Component;
