import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ig1wsmdck {
  fill: currentColor;
  d: path("M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m188 28H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24m0 40H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24m0 40H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24");
}
</style><path class="ig1wsmdck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-align-justify-bold"} {...others} />);
}

export default Component;
