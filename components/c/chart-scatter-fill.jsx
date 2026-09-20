import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.y2e9htf-c {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-28 32a12 12 0 1 1-12 12a12 12 0 0 1 12-12m0 56a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-40-16a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-24-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-24 56a12 12 0 1 1-12 12a12 12 0 0 1 12-12m100 64H56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v104h136a8 8 0 0 1 0 16");
}
</style><path class="y2e9htf-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:chart-scatter-fill"} {...others} />);
}

export default Component;
