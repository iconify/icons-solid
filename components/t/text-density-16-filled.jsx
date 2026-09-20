import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.y38hioq6v {
  fill: currentColor;
  d: path("M8.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5M7 3H2.5a.5.5 0 0 0 0 1H7zm0 3H2.5a.5.5 0 0 0 0 1H7zm0 3H2.5a.5.5 0 0 0 0 1H7zm0 3H2.5a.5.5 0 0 0 0 1H7zm5.5 0H10V9h2.5a1.5 1.5 0 0 1 0 3m0-5H10V4h2.5a1.5 1.5 0 0 1 0 3");
}
</style><path class="y38hioq6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-density-16-filled"} {...others} />);
}

export default Component;
