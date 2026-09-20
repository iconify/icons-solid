import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.w7n88fbbm {
  fill: currentColor;
  d: path("M220 128a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4m-92-52a12 12 0 1 0-12-12a12 12 0 0 0 12 12m0 104a12 12 0 1 0 12 12a12 12 0 0 0-12-12");
}
</style><path class="w7n88fbbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:divide-thin"} {...others} />);
}

export default Component;
