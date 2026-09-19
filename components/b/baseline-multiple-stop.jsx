import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v7v96-bva {
  fill: currentColor;
  d: path("m17 4l4 4l-4 4V9h-4V7h4zm-7 3c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1M6 7c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m1 10h4v-2H7v-3l-4 4l4 4zm7 0c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1");
}
</style><path class="v7v96-bva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-multiple-stop"} {...others} />);
}

export default Component;
