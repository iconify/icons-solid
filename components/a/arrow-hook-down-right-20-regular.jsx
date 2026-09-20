import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.e-axztkxq {
  fill: currentColor;
  d: path("M4 9a5 5 0 0 1 5-5h4.5a.5.5 0 0 1 0 1H9a4 4 0 1 0 0 8h5.293l-2.7-2.7a.5.5 0 1 1 .708-.706l3.539 3.539a.5.5 0 0 1 .125.497a.5.5 0 0 1-.135.247l-3.533 3.533a.5.5 0 0 1-.707-.707L14.293 14H9a5 5 0 0 1-5-5");
}
</style><path class="e-axztkxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-hook-down-right-20-regular"} {...others} />);
}

export default Component;
