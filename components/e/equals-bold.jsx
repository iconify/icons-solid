import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.iiu4r_vok {
  fill: currentColor;
  d: path("M228 160a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M40 108h176a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24");
}
</style><path class="iiu4r_vok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:equals-bold"} {...others} />);
}

export default Component;
