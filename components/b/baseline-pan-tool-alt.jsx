import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.orj108n0p {
  fill: currentColor;
  d: path("m19.98 14.82l-.63 4.46c-.14.99-.99 1.72-1.98 1.72h-6.16c-.53 0-1.29-.21-1.66-.59L5 15.62l.83-.84c.24-.24.58-.35.92-.28l3.25.74V4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h.91c.31 0 .62.07.89.21l4.09 2.04c.77.39 1.21 1.22 1.09 2.07");
}
</style><path class="orj108n0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-pan-tool-alt"} {...others} />);
}

export default Component;
