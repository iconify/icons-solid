import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.yay6clblu {
  fill: currentColor;
  d: path("M216 74H30V48a6 6 0 0 0-12 0v160a6 6 0 0 0 12 0v-34h212v34a6 6 0 0 0 12 0v-96a38 38 0 0 0-38-38M30 86h76v76H30Zm88 76V86h98a26 26 0 0 1 26 26v50Z");
}
</style><path class="yay6clblu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:bed-light"} {...others} />);
}

export default Component;
