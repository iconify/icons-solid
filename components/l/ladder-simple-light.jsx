import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.rm1up4bio {
  fill: currentColor;
  d: path("M192 26a6 6 0 0 0-6 6v34H70V32a6 6 0 0 0-12 0v192a6 6 0 0 0 12 0v-34h116v34a6 6 0 0 0 12 0V32a6 6 0 0 0-6-6m-6 52v44H70V78ZM70 178v-44h116v44Z");
}
</style><path class="rm1up4bio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:ladder-simple-light"} {...others} />);
}

export default Component;
