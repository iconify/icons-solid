import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.prh2l4bbn {
  fill: currentColor;
  d: path("M180 72a52 52 0 1 0-56 51.83V232a4 4 0 0 0 8 0V123.83A52.05 52.05 0 0 0 180 72m-52 44a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44");
}
</style><path class="prh2l4bbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:map-pin-simple-thin"} {...others} />);
}

export default Component;
