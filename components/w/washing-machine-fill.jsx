import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.fsh9ms_wq {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 152a56 56 0 1 1 56-56a56 56 0 0 1-56 56m60-104a12 12 0 1 1 12-12a12 12 0 0 1-12 12m-54.34 29.66l-32 32a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 11.32m32-3.32a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 0");
}
</style><path class="fsh9ms_wq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:washing-machine-fill"} {...others} />);
}

export default Component;
