import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.h9rxcg6rq {
  fill: currentColor;
  d: path("M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m30 34a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12Zm152 40H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12m-24 40H64a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12");
}
</style><path class="h9rxcg6rq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-align-center-light"} {...others} />);
}

export default Component;
