import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.o87fxcbma {
  fill: currentColor;
  d: path("M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m28 36a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8Zm152 40H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8m-24 40H64a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8");
}
</style><path class="o87fxcbma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-align-center-thin"} {...others} />);
}

export default Component;
