import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.gcrs5bsdt {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("m29.75 29.82l53.73 8.28l-14.17 14.18l28.94 28.94l-16.96 16.96l-28.94-28.94l-14.33 14.33z");
}
</style><path class="gcrs5bsdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:up-left-arrow"} {...others} />);
}

export default Component;
