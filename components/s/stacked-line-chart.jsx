import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zw0amo67q {
  fill: currentColor;
  d: path("M3.5 21.5L2 20l7.5-7.5l4 4l7.1-8L22 9.9l-8.5 9.6l-4-4zm0-6L2 14l7.5-7.5l4 4l7.1-8L22 3.9l-8.5 9.6l-4-4z");
}
</style><path class="zw0amo67q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stacked-line-chart"} {...others} />);
}

export default Component;
