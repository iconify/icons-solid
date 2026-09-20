import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.g8vga9b0j {
  fill: currentColor;
  d: path("M128 8a72.08 72.08 0 0 0-72 72v96a16 16 0 0 0 16 16h32v40a24 24 0 0 0 48 0v-40h32a16 16 0 0 0 16-16V80a72.08 72.08 0 0 0-72-72m8 224a8 8 0 0 1-16 0v-40h16Zm48-56H72V80a56 56 0 0 1 112 0zM120 72v80a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0m32 0v80a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0");
}
</style><path class="g8vga9b0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:popsicle"} {...others} />);
}

export default Component;
