import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.f9slrkt1s {
  fill: currentColor;
  d: path("M14.77 2a1.5 1.5 0 0 0-1.434 1.064L9.404 16H17a1 1 0 1 1 0 2H8.797l-.81 2.667H18.5a1 1 0 1 1 0 2h-11q-.06 0-.119-.007L5.76 28H3a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2h-2.759L18.665 3.064A1.5 1.5 0 0 0 17.229 2z");
}
</style><path class="f9slrkt1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:road-cone-32-filled"} {...others} />);
}

export default Component;
