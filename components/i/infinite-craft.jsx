import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ehlps7bkk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.935 24c3.887-5.69 8.516-9.49 12.93-8.972c2.772.325 6.635 2.588 6.635 8.972s-3.863 8.647-6.635 8.972c-4.414.517-9.043-3.283-12.93-8.972");
}

.tll8q3h0v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.065 24c-3.887-5.69-8.516-9.49-12.93-8.972C8.363 15.353 4.5 17.616 4.5 24s3.863 8.647 6.635 8.972c4.414.517 9.043-3.283 12.93-8.972");
}
</style><path class="ehlps7bkk"/><path class="tll8q3h0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:infinite-craft"} {...others} />);
}

export default Component;
