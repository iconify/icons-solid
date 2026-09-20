import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.tbiiy9pbz {
  fill: currentColor;
  d: path("M17.25 19a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5zm4-6a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1 0-1.5zm3-6a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5z");
}
</style><path class="tbiiy9pbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:filter-28-regular"} {...others} />);
}

export default Component;
