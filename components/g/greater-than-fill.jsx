import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.qbk3p7bqe {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-20.65 103.26l-104 48a8 8 0 0 1-6.7-14.52L164.91 128L76.65 87.26a8 8 0 1 1 6.7-14.52l104 48a8 8 0 0 1 0 14.52");
}
</style><path class="qbk3p7bqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:greater-than-fill"} {...others} />);
}

export default Component;
