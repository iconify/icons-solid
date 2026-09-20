import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.u_tahz86b {
  fill: currentColor;
  d: path("M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V3H6v6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H5V3H3v1a.5.5 0 0 1-1 0z");
}
</style><path class="u_tahz86b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-12-regular"} {...others} />);
}

export default Component;
