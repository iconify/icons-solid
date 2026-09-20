import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.f1mly_b8c {
  fill: currentColor;
  d: path("M200 40a8 8 0 0 0 0 16a16 16 0 0 1 16 16v58.08A44 44 0 0 0 145.68 152h-35.36A44 44 0 0 0 40 130.08V72a16 16 0 0 1 16-16a8 8 0 0 0 0-16a32 32 0 0 0-32 32v92a44 44 0 0 0 87.81 4h32.38a44 44 0 0 0 87.81-4V72a32 32 0 0 0-32-32M68 192a28 28 0 1 1 28-28a28 28 0 0 1-28 28m120 0a28 28 0 1 1 28-28a28 28 0 0 1-28 28");
}
</style><path class="f1mly_b8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:eyeglasses"} {...others} />);
}

export default Component;
