import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.fbpn9hz8i {
  fill: currentColor;
  d: path("M160 36H96a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h64a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m12 164a12 12 0 0 1-12 12H96a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h64a12 12 0 0 1 12 12Zm40-112v80a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0m32 16v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0M52 88v80a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0m-32 16v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0");
}
</style><path class="fbpn9hz8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:vibrate-thin"} {...others} />);
}

export default Component;
