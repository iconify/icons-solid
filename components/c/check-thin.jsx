import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zeu_pq66q {
  fill: currentColor;
  d: path("m226.83 74.83l-128 128a4 4 0 0 1-5.66 0l-56-56a4 4 0 0 1 5.66-5.66L96 194.34L221.17 69.17a4 4 0 1 1 5.66 5.66");
}
</style><path class="zeu_pq66q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:check-thin"} {...others} />);
}

export default Component;
