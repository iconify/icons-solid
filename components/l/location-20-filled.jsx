import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.yrapopj4k {
  fill: currentColor;
  d: path("M5.05 4.05a7 7 0 0 1 9.9 0a7.006 7.006 0 0 1 0 9.905l-1.128 1.114l-2.435 2.37a1.994 1.994 0 0 1-2.64.118l-.133-.118l-2.043-1.985l-1.52-1.499a7.006 7.006 0 0 1 0-9.904M10 6.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5");
}
</style><path class="yrapopj4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:location-20-filled"} {...others} />);
}

export default Component;
