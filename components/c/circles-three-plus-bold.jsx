import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.th_jys44n {
  fill: currentColor;
  d: path("M78 36a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18a18 18 0 0 1-18 18m100 24a42 42 0 1 0-42-42a42 42 0 0 0 42 42m0-60a18 18 0 1 1-18 18a18 18 0 0 1 18-18M78 136a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18a18 18 0 0 1-18 18m142-18a12 12 0 0 1-12 12h-18v18a12 12 0 0 1-24 0v-18h-18a12 12 0 0 1 0-24h18v-18a12 12 0 0 1 24 0v18h18a12 12 0 0 1 12 12");
}
</style><path class="th_jys44n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:circles-three-plus-bold"} {...others} />);
}

export default Component;
