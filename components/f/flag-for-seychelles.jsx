import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.k3zhr6bur {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M17.148 55.72q-.363-.225-.718-.46l42.34-15.053a28 28 0 0 1-6.652 11.238zm39.291-37.362L14.975 54L36.121 4.306c8.734 1.294 16.162 6.636 20.318 14.052");
}
</style><path class="k3zhr6bur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:flag-for-seychelles"} {...others} />);
}

export default Component;
