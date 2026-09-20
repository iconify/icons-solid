import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.lzmtzkkga {
  fill: currentColor;
  d: path("M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-1 0a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 17 10M4.71 14.584l9.874-9.875a7 7 0 0 0-9.874 9.874");
}
</style><path class="lzmtzkkga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:prohibited-20-regular"} {...others} />);
}

export default Component;
