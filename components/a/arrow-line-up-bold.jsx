import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.rf5834b5g {
  fill: currentColor;
  d: path("M208.49 143.51a12 12 0 0 1-17 17L140 109v115a12 12 0 0 1-24 0V109l-51.51 51.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0ZM216 28H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24");
}
</style><path class="rf5834b5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-line-up-bold"} {...others} />);
}

export default Component;
