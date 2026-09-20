import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.yjhbjrb3j {
  fill: currentColor;
  d: path("M216 148h-44v-40h44a12 12 0 0 0 0-24h-44V40a12 12 0 0 0-24 0v44h-40V40a12 12 0 0 0-24 0v44H40a12 12 0 0 0 0 24h44v40H40a12 12 0 0 0 0 24h44v44a12 12 0 0 0 24 0v-44h40v44a12 12 0 0 0 24 0v-44h44a12 12 0 0 0 0-24m-108 0v-40h40v40Z");
}
</style><path class="yjhbjrb3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:hash-straight-bold"} {...others} />);
}

export default Component;
