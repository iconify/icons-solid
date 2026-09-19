import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.a-6x50jyc {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m0 45c-8.284 0-15-6.717-15-15c0-8.285 6.716-15 15-15s15 6.715 15 15c0 8.283-6.716 15-15 15");
}
</style><path class="a-6x50jyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:radio-button"} {...others} />);
}

export default Component;
