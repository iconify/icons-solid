import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.pv8w07f6o {
  fill: currentColor;
  d: path("M21.25 2A2.75 2.75 0 0 1 24 4.75v18.5A2.75 2.75 0 0 1 21.25 26H6.75A2.75 2.75 0 0 1 4 23.25V4.75A2.75 2.75 0 0 1 6.75 2zM9 19a1.5 1.5 0 0 0 0 3h10a1.5 1.5 0 0 0 0-3zM9 6a1.5 1.5 0 1 0 0 3h10a1.5 1.5 0 0 0 0-3z");
}
</style><path class="pv8w07f6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:document-header-footer-28-filled"} {...others} />);
}

export default Component;
