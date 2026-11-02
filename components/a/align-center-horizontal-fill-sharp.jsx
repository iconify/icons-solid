import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k3-tx8bkj {
  fill: currentColor;
  d: path("M13 3v18a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0M9 3v8H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 0h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-5ZM9 21H6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h3Zm6 0v-8h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1Z");
}
</style><path class="k3-tx8bkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:align-center-horizontal-fill-sharp"} {...others} />);
}

export default Component;
