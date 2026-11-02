import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yahzeibjy {
  fill: currentColor;
  d: path("M10 13.171a3 3 0 0 1 0 5.658V21a1 1 0 0 1-2 0v-2.171a3 3 0 0 1 0-5.658V3a1 1 0 0 1 2 0Zm6-8a3 3 0 0 1 0 5.658V21a1 1 0 0 1-2 0V10.829a3 3 0 0 1 0-5.658V3a1 1 0 0 1 2 0Z");
}
</style><path class="yahzeibjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:slider-vertical-1-fill-round"} {...others} />);
}

export default Component;
