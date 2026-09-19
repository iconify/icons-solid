import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kt7kgiy_n {
  fill: currentColor;
  d: path("m3.5 18.49l6-6.01l4 4L22 6.92l-1.41-1.41l-7.09 7.97l-4-4L2 16.99z");
}
</style><path class="kt7kgiy_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-show-chart"} {...others} />);
}

export default Component;
