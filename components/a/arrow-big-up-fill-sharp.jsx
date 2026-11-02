import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q-151ub9p {
  fill: currentColor;
  d: path("M15 21H9a1 1 0 0 1-1-1v-7H4a1.002 1.002 0 0 1-.707-1.707l8-8a1 1 0 0 1 1.414 0l8 8A1 1 0 0 1 20 13h-4v7a1 1 0 0 1-1 1");
}
</style><path class="q-151ub9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-big-up-fill-sharp"} {...others} />);
}

export default Component;
