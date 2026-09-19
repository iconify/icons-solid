import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e4wevifyn {
  fill: currentColor;
  d: path("M10 10.02h5V21h-5zM17 21h5V10h-5zm5-18H3v5h19zM3 21h5V10H3z");
}
</style><path class="e4wevifyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-table-chart"} {...others} />);
}

export default Component;
