import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.bk2rnbb-o {
  fill: currentColor;
  d: path("M196 52H28A28 28 0 0 0 0 80v96a28 28 0 0 0 28 28h168a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 124a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h168a4 4 0 0 1 4 4Zm-96-72v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-40 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m192 0v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0");
}
</style><path class="bk2rnbb-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:battery-medium-bold"} {...others} />);
}

export default Component;
