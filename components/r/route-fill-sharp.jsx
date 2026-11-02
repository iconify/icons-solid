import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bzl9v9h9e {
  fill: currentColor;
  d: path("M15.171 7H7v4h11a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8.829a3 3 0 1 1 0-2H17v-4H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h9.171a3 3 0 1 1 0 2");
}
</style><path class="bzl9v9h9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:route-fill-sharp"} {...others} />);
}

export default Component;
