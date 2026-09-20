import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mhi530bdw {
  fill: currentColor;
  d: path("M18 7.208c0-1.114-1.346-1.672-2.133-.884l-9.543 9.543c-.788.787-.23 2.133.884 2.133h9.042A1.75 1.75 0 0 0 18 16.25z");
}
</style><path class="mhi530bdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:caret-down-right-24-filled"} {...others} />);
}

export default Component;
