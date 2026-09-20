import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.uy-9_jblp {
  fill: currentColor;
  d: path("M235.09 131.41A12 12 0 0 0 224 124h-36V48a20 20 0 0 0-20-20H88a20 20 0 0 0-20 20v76H32a12 12 0 0 0-8.48 20.49l96 96a12 12 0 0 0 17 0l96-96a12 12 0 0 0 2.57-13.08M128 215l-67-67h19a12 12 0 0 0 12-12V52h72v84a12 12 0 0 0 12 12h19Z");
}
</style><path class="uy-9_jblp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-fat-down-bold"} {...others} />);
}

export default Component;
