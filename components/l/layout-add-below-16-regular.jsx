import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.uft1uibtq {
  fill: currentColor;
  d: path("M13.5 13a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zm-2-11A2.5 2.5 0 0 1 14 4.5v5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-5A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5V9h10V4.5A1.5 1.5 0 0 0 11.5 3z");
}
</style><path class="uft1uibtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-add-below-16-regular"} {...others} />);
}

export default Component;
