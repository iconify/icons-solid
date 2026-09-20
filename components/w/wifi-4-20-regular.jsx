import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.i4fabudhi {
  fill: currentColor;
  d: path("M10.963 13.787a1.298 1.298 0 1 1-1.836 1.836a1.298 1.298 0 0 1 1.836-1.836");
}
</style><path class="i4fabudhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:wifi-4-20-regular"} {...others} />);
}

export default Component;
