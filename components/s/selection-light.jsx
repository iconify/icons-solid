import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.rm1o3rbck {
  fill: currentColor;
  d: path("M150 40a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m-6 170h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m64-176h-24a6 6 0 0 0 0 12h24a2 2 0 0 1 2 2v24a6 6 0 0 0 12 0V48a14 14 0 0 0-14-14m8 72a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m0 72a6 6 0 0 0-6 6v24a2 2 0 0 1-2 2h-24a6 6 0 0 0 0 12h24a14 14 0 0 0 14-14v-24a6 6 0 0 0-6-6M40 150a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m32 60H48a2 2 0 0 1-2-2v-24a6 6 0 0 0-12 0v24a14 14 0 0 0 14 14h24a6 6 0 0 0 0-12m0-176H48a14 14 0 0 0-14 14v24a6 6 0 0 0 12 0V48a2 2 0 0 1 2-2h24a6 6 0 0 0 0-12");
}
</style><path class="rm1o3rbck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:selection-light"} {...others} />);
}

export default Component;
