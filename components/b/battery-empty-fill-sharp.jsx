import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ricnnkb6w {
  fill: currentColor;
  d: path("M2 17V7a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m20-3a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Z");
}
</style><path class="ricnnkb6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:battery-empty-fill-sharp"} {...others} />);
}

export default Component;
