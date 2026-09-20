import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.durhuiblv {
  fill: currentColor;
  d: path("M2.5 5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM7 5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm4.5 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm-9 5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z");
}
</style><path class="durhuiblv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-horizontal-2-dashes-solid-16-regular"} {...others} />);
}

export default Component;
