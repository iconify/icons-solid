import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.goc8j7ehc {
  fill: currentColor;
  d: path("M228 208a4 4 0 0 1-4 4H48a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4M72 148a4 4 0 0 0 4-4V57.66l105.17 105.17a4 4 0 0 0 5.66-5.66L81.66 52H168a4 4 0 0 0 0-8H72a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4");
}
</style><path class="goc8j7ehc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-line-up-left-thin"} {...others} />);
}

export default Component;
