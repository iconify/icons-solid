import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zrziyib9t {
  fill: currentColor;
  d: path("M21 11H6.83l3.58-3.59L9 6l-6 6l6 6l1.41-1.41L6.83 13H21z");
}
</style><path class="zrziyib9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-keyboard-backspace"} {...others} />);
}

export default Component;
