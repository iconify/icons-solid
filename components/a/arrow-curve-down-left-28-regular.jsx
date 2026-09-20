import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.nedo0905v {
  fill: currentColor;
  d: path("M19.401 3.378a.75.75 0 0 0-1.023-.28C13.072 6.132 13 11.269 13 14.75v7.69l-4.72-4.72a.75.75 0 1 0-1.06 1.06l6 6a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0-1.06-1.06l-4.72 4.72v-7.69c0-3.518.128-7.78 4.622-10.349a.75.75 0 0 0 .28-1.023");
}
</style><path class="nedo0905v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-curve-down-left-28-regular"} {...others} />);
}

export default Component;
