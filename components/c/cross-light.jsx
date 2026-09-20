import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.oubb7zbgi {
  fill: currentColor;
  d: path("M200 74h-42V32a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v42H56a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h42v90a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-90h42a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14m2 46a2 2 0 0 1-2 2h-48a6 6 0 0 0-6 6v96a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2v-96a6 6 0 0 0-6-6H56a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h48a6 6 0 0 0 6-6V32a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v48a6 6 0 0 0 6 6h48a2 2 0 0 1 2 2Z");
}
</style><path class="oubb7zbgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cross-light"} {...others} />);
}

export default Component;
