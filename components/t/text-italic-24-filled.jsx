import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zhm75tbgd {
  fill: currentColor;
  d: path("M19 4a1 1 0 1 1 0 2h-3.56l-4.551 12H14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h3.75l4.552-12H10a1 1 0 0 1 0-2z");
}
</style><path class="zhm75tbgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-italic-24-filled"} {...others} />);
}

export default Component;
