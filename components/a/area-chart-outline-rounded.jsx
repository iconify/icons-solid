import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vexu9sb8v {
  fill: currentColor;
  d: path("M13.054 5.133L16.654 8h2.308q.44 0 .739.299t.299.74V19H4v-8.385q0-.51.444-.726t.848.08l1.939 1.454l4.333-6.083q.269-.373.705-.43q.437-.058.785.223M5 11v3.6L8 17l4-5.5l7 5.45V9h-2.7l-3.9-3.125l-4.95 6.95z");
}
</style><path class="vexu9sb8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:area-chart-outline-rounded"} {...others} />);
}

export default Component;
