import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g1edizbwy {
  fill: currentColor;
  d: path("M13 21V3a1 1 0 0 1 1.993-.117L15 3v18a1 1 0 0 1-1.993.117zm-4 0V3a1 1 0 0 1 1.993-.117L11 3v18a1 1 0 0 1-1.993.117z");
}
</style><path class="g1edizbwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:re-order-vertical-24-filled"} {...others} />);
}

export default Component;
