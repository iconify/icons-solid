import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.dojr_ibja {
  fill: currentColor;
  d: path("M198 136a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h128a6 6 0 0 1 6 6m34-54H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12m-80 96h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12");
}
</style><path class="dojr_ibja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:funnel-simple-light"} {...others} />);
}

export default Component;
