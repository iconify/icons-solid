import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.d_a8rsuvc {
  fill: currentColor;
  d: path("M78 48a6 6 0 0 1-6 6H40a2 2 0 0 0-2 2v16a6 6 0 0 1-12 0V56a14 14 0 0 1 14-14h32a6 6 0 0 1 6 6M32 150a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m40 52H40a2 2 0 0 1-2-2v-16a6 6 0 0 0-12 0v16a14 14 0 0 0 14 14h32a6 6 0 0 0 0-12m72 0h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m80-24a6 6 0 0 0-6 6v16a2 2 0 0 1-2 2h-32a6 6 0 0 0 0 12h32a14 14 0 0 0 14-14v-16a6 6 0 0 0-6-6m0-72a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m-8-64h-32a6 6 0 0 0 0 12h32a2 2 0 0 1 2 2v16a6 6 0 0 0 12 0V56a14 14 0 0 0-14-14m-72 0h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12");
}
</style><path class="d_a8rsuvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:rectangle-dashed-light"} {...others} />);
}

export default Component;
