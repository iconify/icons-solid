import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tk8a2pb-p {
  fill: currentColor;
  d: path("M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2M3 19c0 1.1.9 2 2 2h3V10H3z");
}
</style><path class="tk8a2pb-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-table-chart"} {...others} />);
}

export default Component;
