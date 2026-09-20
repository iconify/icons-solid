import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.is65p3bnm {
  fill: currentColor;
  d: path("M53.17 114.83a4 4 0 0 1 5.66-5.66L124 174.34V32a4 4 0 0 1 8 0v142.34l65.17-65.17a4 4 0 1 1 5.66 5.66l-72 72a4 4 0 0 1-5.66 0ZM216 212H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8");
}
</style><path class="is65p3bnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-line-down-thin"} {...others} />);
}

export default Component;
