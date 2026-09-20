import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.hbskapb6q {
  fill: currentColor;
  d: path("M3 6a1 1 0 0 1 1-1h1a.5.5 0 0 1 0 1H4v1a.5.5 0 0 1-1 0zm10 0a1 1 0 0 0-1-1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0zm0 4a1 1 0 0 1-1 1h-1a.5.5 0 0 1 0-1h1V9a.5.5 0 0 1 1 0zM3 10a1 1 0 0 0 1 1h1a.5.5 0 0 0 0-1H4V9a.5.5 0 0 0-1 0zm0-7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm10 1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z");
}
</style><path class="hbskapb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:page-fit-16-regular"} {...others} />);
}

export default Component;
