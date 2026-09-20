import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.cmqrkgb0n {
  fill: currentColor;
  d: path("M19 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6m1-9a6 6 0 0 1 0 12H8A6 6 0 0 1 8 8zm4.5 6A4.5 4.5 0 0 0 20 9.5H8a4.5 4.5 0 1 0 0 9h12a4.5 4.5 0 0 0 4.5-4.5");
}
</style><path class="cmqrkgb0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:toggle-right-28-regular"} {...others} />);
}

export default Component;
