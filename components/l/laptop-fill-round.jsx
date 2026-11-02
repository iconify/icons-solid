import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gjgx2qbcs {
  fill: currentColor;
  d: path("M4 15.171V8a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v7.171A3.001 3.001 0 0 1 19 21H5a3 3 0 0 1-1-5.829M5 17a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z");
}
</style><path class="gjgx2qbcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:laptop-fill-round"} {...others} />);
}

export default Component;
