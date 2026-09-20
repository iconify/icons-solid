import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.x6lq_w3ig {
  fill: currentColor;
  d: path("M7.5 16A1.5 1.5 0 0 0 9 14.5v-9A1.5 1.5 0 0 0 7.5 4h-2A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16zm7 0a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-2A1.5 1.5 0 0 0 11 5.5v9a1.5 1.5 0 0 0 1.5 1.5z");
}
</style><path class="x6lq_w3ig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:align-space-around-vertical-20-filled"} {...others} />);
}

export default Component;
