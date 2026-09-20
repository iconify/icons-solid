import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.i65yfwb6u {
  fill: currentColor;
  d: path("M3.146 7.646a.5.5 0 0 1 .707 0L8 11.793l4.147-4.147a.501.501 0 0 1 .707.707l-4.5 4.5a.5.5 0 0 1-.707 0l-4.5-4.5a.5.5 0 0 1 0-.707m0-4a.5.5 0 0 1 .707 0L8 7.793l4.147-4.147a.501.501 0 0 1 .707.707l-4.5 4.5a.5.5 0 0 1-.707 0l-4.5-4.5a.5.5 0 0 1 0-.707");
}
</style><path class="i65yfwb6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:chevron-double-down-16-regular"} {...others} />);
}

export default Component;
