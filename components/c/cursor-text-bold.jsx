import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.n_pucnbpb {
  fill: currentColor;
  d: path("M188 208a12 12 0 0 1-12 12h-16a43.86 43.86 0 0 1-32-13.85A43.86 43.86 0 0 1 96 220H80a12 12 0 0 1 0-24h16a20 20 0 0 0 20-20v-36h-12a12 12 0 0 1 0-24h12V80a20 20 0 0 0-20-20H80a12 12 0 0 1 0-24h16a43.86 43.86 0 0 1 32 13.85A43.86 43.86 0 0 1 160 36h16a12 12 0 0 1 0 24h-16a20 20 0 0 0-20 20v36h12a12 12 0 0 1 0 24h-12v36a20 20 0 0 0 20 20h16a12 12 0 0 1 12 12");
}
</style><path class="n_pucnbpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cursor-text-bold"} {...others} />);
}

export default Component;
