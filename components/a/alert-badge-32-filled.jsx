import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.qgjo5vb3i {
  fill: currentColor;
  d: path("M7 13a9 9 0 0 1 14.084-7.428A4.5 4.5 0 0 0 25 13.388v3.42l1.928 4.82A1 1 0 0 1 26 23H6a1 1 0 0 1-.928-1.371L7 16.807zm5.125 12A3.99 3.99 0 0 0 16 28a3.99 3.99 0 0 0 3.875-3zM24 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6");
}
</style><path class="qgjo5vb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:alert-badge-32-filled"} {...others} />);
}

export default Component;
