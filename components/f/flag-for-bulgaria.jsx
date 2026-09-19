import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.ve7ziktqg {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m0 2c11.917 0 22.112 7.486 26.147 18H5.853C9.888 11.486 20.083 4 32 4M6.254 43a28 28 0 0 1-.762-2h53.016a28 28 0 0 1-.762 2z");
}
</style><path class="ve7ziktqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:flag-for-bulgaria"} {...others} />);
}

export default Component;
