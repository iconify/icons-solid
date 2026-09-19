import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tyqkkwbwy {
  fill: currentColor;
  d: path("m13.5 13.48l-4-4L2 16.99l1.5 1.5l6-6.01l4 4L22 6.92l-1.41-1.41z");
}
</style><path class="tyqkkwbwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-show-chart"} {...others} />);
}

export default Component;
