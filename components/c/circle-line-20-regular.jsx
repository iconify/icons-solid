import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.bvoij5btx {
  fill: currentColor;
  d: path("M3.018 9.5h13.964a7 7 0 0 0-13.964 0M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m14.982.5H3.018a7 7 0 0 0 13.964 0");
}
</style><path class="bvoij5btx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:circle-line-20-regular"} {...others} />);
}

export default Component;
