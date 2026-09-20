import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wl9mjtb1g {
  fill: currentColor;
  d: path("M2 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m4.293 3.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L8 11.414V19a1 1 0 1 1-2 0v-7.586l-1.293 1.293a1 1 0 0 1-1.414-1.414zM21 10h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2");
}
</style><path class="wl9mjtb1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-collapse-all-24-filled"} {...others} />);
}

export default Component;
