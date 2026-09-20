import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.jnjanvijv {
  fill: currentColor;
  d: path("M4.5 4A1.5 1.5 0 0 0 3 5.5v4A1.5 1.5 0 0 0 4.5 11h7A1.5 1.5 0 0 0 13 9.5v-4A1.5 1.5 0 0 0 11.5 4zM4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM2.5 12a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z");
}
</style><path class="jnjanvijv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:laptop-16-regular"} {...others} />);
}

export default Component;
