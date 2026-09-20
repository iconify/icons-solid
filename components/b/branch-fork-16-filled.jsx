import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.e99osqbei {
  fill: currentColor;
  d: path("M7 3.5a2.5 2.5 0 0 1-2 2.45V8h4.5A1.5 1.5 0 0 0 11 6.5v-.55a2.5 2.5 0 1 1 1 0v.55A2.5 2.5 0 0 1 9.5 9H5v1.05a2.5 2.5 0 1 1-1 0v-4.1A2.5 2.5 0 1 1 7 3.5");
}
</style><path class="e99osqbei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:branch-fork-16-filled"} {...others} />);
}

export default Component;
