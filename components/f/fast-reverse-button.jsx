import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.qltp1pcqe {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M121.76 29.01L66.84 60.72V29.01L6.24 64l60.6 34.99V67.28l54.92 31.71z");
}
</style><path class="qltp1pcqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:fast-reverse-button"} {...others} />);
}

export default Component;
