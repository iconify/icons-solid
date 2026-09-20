import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.d99lirbiz {
  fill: currentColor;
  d: path("M140 124v92a12 12 0 0 1-24 0v-92a12 12 0 0 1 24 0m60 68a12 12 0 0 0-12 12v12a12 12 0 0 0 24 0v-12a12 12 0 0 0-12-12m24-40h-12V40a12 12 0 0 0-24 0v112h-12a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24m-168 8a12 12 0 0 0-12 12v44a12 12 0 0 0 24 0v-44a12 12 0 0 0-12-12m24-40H68V40a12 12 0 0 0-24 0v80H32a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24m72-48h-12V40a12 12 0 0 0-24 0v32h-12a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24");
}
</style><path class="d99lirbiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:faders-bold"} {...others} />);
}

export default Component;
