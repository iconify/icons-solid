import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ye17wp4fx {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m66-73.34l-24 36a12 12 0 0 1-20 0l-22-33l-22 33a12 12 0 0 1-20 0l-24-36A12 12 0 0 1 72 120h41.58L94 90.66A12 12 0 0 1 104 72h48a12 12 0 0 1 10 18.66L142.42 120H184a12 12 0 0 1 10 18.66");
}
</style><path class="ye17wp4fx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:fallout-shelter-bold"} {...others} />);
}

export default Component;
