import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.mffce2b2t {
  fill: currentColor;
  d: path("M230 208a6 6 0 0 1-6 6H48a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M72 150a6 6 0 0 0 6-6V62.49l101.76 101.75a6 6 0 0 0 8.48-8.48L86.49 54H168a6 6 0 0 0 0-12H72a6 6 0 0 0-6 6v96a6 6 0 0 0 6 6");
}
</style><path class="mffce2b2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-line-up-left-light"} {...others} />);
}

export default Component;
