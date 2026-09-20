import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.d71nqubsz {
  fill: currentColor;
  d: path("M176 150h32a14 14 0 0 0 14-14v-32a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v10H86V78h10a14 14 0 0 0 14-14V32a14 14 0 0 0-14-14H64a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h10v114a22 22 0 0 0 22 22h66v10a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-32a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v10H96a10 10 0 0 1-10-10v-66h76v10a14 14 0 0 0 14 14M62 64V32a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2m112 128a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2Zm0-88a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2Z");
}
</style><path class="d71nqubsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:tree-view-light"} {...others} />);
}

export default Component;
