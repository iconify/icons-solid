import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.m8pnaeb1p {
  fill: currentColor;
  d: path("M84 48a20 20 0 1 1-20-20a20 20 0 0 1 20 20m44-20a20 20 0 1 0 20 20a20 20 0 0 0-20-20m64 40a20 20 0 1 0-20-20a20 20 0 0 0 20 20M64 84a20 20 0 1 0 20 20a20 20 0 0 0-20-20m64 0a20 20 0 1 0 20 20a20 20 0 0 0-20-20m64 0a20 20 0 1 0 20 20a20 20 0 0 0-20-20M64 140a20 20 0 1 0 20 20a20 20 0 0 0-20-20m64 0a20 20 0 1 0 20 20a20 20 0 0 0-20-20m0 56a20 20 0 1 0 20 20a20 20 0 0 0-20-20m64-56a20 20 0 1 0 20 20a20 20 0 0 0-20-20");
}
</style><path class="m8pnaeb1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:numpad-bold"} {...others} />);
}

export default Component;
