import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.vb533kbcj {
  fill: currentColor;
  d: path("M2.5 6a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm6 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm6 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-12 6a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z");
}
</style><path class="vb533kbcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-horizontal-2-dashes-solid-20-regular"} {...others} />);
}

export default Component;
