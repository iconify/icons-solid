import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e9gqtfbgf {
  fill: currentColor;
  d: path("M18 6.41L16.59 5L12 9.58L7.41 5L6 6.41l6 6z");
}

.kdmnkfbpw {
  fill: currentColor;
  d: path("m18 13l-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z");
}
</style><path class="e9gqtfbgf"/><path class="kdmnkfbpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-keyboard-double-arrow-down"} {...others} />);
}

export default Component;
