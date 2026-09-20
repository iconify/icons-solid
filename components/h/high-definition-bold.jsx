import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.bne0d0sxx {
  fill: currentColor;
  d: path("M180 68h-24a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h24a60 60 0 0 0 0-120m0 96h-12V92h12a36 36 0 0 1 0 72m-76 12v-36H56v36a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0v36h48V80a12 12 0 0 1 24 0v96a12 12 0 0 1-24 0M20 44a12 12 0 0 1 12-12h192a12 12 0 0 1 0 24H32a12 12 0 0 1-12-12m216 168a12 12 0 0 1-12 12H32a12 12 0 0 1 0-24h192a12 12 0 0 1 12 12");
}
</style><path class="bne0d0sxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:high-definition-bold"} {...others} />);
}

export default Component;
