import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.hj8az6bzf {
  d: path("M18 7.207c0-1.114-1.346-1.671-2.134-.884l-9.543 9.543c-.787.788-.23 2.134.884 2.134h9.043A1.75 1.75 0 0 0 18 16.25V7.207z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="hj8az6bzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:caret-24-filled"} {...others} />);
}

export default Component;
