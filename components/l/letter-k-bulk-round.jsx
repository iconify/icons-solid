import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wwo7y5b1s {
  fill: currentColor;
  d: path("M8 11h.586l7.707-7.707a.999.999 0 1 1 1.414 1.414L10.414 12l7.293 7.293a.999.999 0 1 1-1.414 1.414L8.586 13H8v7a1 1 0 0 1-2 0V4a1 1 0 0 1 2 0Z");
}
</style><path class="wwo7y5b1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-k-bulk-round"} {...others} />);
}

export default Component;
