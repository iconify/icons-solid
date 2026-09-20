import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.g-ew1jtjz {
  d: path("M18 7.208c0-1.114-1.346-1.672-2.134-.884l-9.543 9.543c-.787.787-.23 2.133.884 2.133h9.043A1.75 1.75 0 0 0 18 16.25V7.208z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="g-ew1jtjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:caret-down-left-24-filled"} {...others} />);
}

export default Component;
