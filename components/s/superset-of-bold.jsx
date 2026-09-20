import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.vlkkaoofi {
  fill: currentColor;
  d: path("M220 200a12 12 0 0 1-12 12H56a12 12 0 0 1 0-24h152a12 12 0 0 1 12 12m-68-52H56a12 12 0 0 0 0 24h96a68 68 0 0 0 0-136H56a12 12 0 0 0 0 24h96a44 44 0 0 1 0 88");
}
</style><path class="vlkkaoofi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:superset-of-bold"} {...others} />);
}

export default Component;
