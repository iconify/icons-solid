import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.z_2zs0bkm {
  fill: currentColor;
  d: path("M216 44h-84V24a4 4 0 0 0-8 0v20H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h47.68l-26.8 33.5a4 4 0 1 0 6.24 5l30.8-38.5h60.16l30.8 38.5a4 4 0 0 0 6.24-5l-26.8-33.5H216a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 132a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-120-56v24a4 4 0 0 1-8 0v-24a4 4 0 0 1 8 0m32-16v40a4 4 0 0 1-8 0v-40a4 4 0 0 1 8 0m32-16v56a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0");
}
</style><path class="z_2zs0bkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:presentation-chart-thin"} {...others} />);
}

export default Component;
