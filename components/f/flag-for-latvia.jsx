import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.t2wnffbqk {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m28 30c0 2.374-.299 4.68-.858 6.883H4.858A28 28 0 0 1 4 32c0-2.375.299-4.681.858-6.884h54.283c.56 2.203.859 4.509.859 6.884");
}
</style><path class="t2wnffbqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:flag-for-latvia"} {...others} />);
}

export default Component;
