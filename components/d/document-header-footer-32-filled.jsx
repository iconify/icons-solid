import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.rwzu13b9h {
  fill: currentColor;
  d: path("M24.75 2A3.25 3.25 0 0 1 28 5.25v21.5A3.25 3.25 0 0 1 24.75 30H7.25A3.25 3.25 0 0 1 4 26.75V5.25A3.25 3.25 0 0 1 7.25 2zM10.5 21a2 2 0 1 0 0 4h11a2 2 0 1 0 0-4zm0-14a2 2 0 1 0 0 4h11a2 2 0 1 0 0-4z");
}
</style><path class="rwzu13b9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:document-header-footer-32-filled"} {...others} />);
}

export default Component;
