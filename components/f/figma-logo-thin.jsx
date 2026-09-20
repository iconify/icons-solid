import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.fmeekbgad {
  fill: currentColor;
  d: path("M184.46 96A36 36 0 0 0 168 28H96a36 36 0 0 0-16.46 68a36 36 0 0 0 1.56 64.76A40 40 0 1 0 140 196v-45.41A36 36 0 1 0 184.46 96M196 64a28 28 0 0 1-28 28h-28V36h28a28 28 0 0 1 28 28m-56 36h5.41a36.4 36.4 0 0 0-5.41 5.41ZM68 64a28 28 0 0 1 28-28h36v56H96a28 28 0 0 1-28-28m64 132a32 32 0 1 1-32-32h32Zm0-40H96a28 28 0 0 1 0-56h36Zm36 0a28 28 0 1 1 28-28a28 28 0 0 1-28 28");
}
</style><path class="fmeekbgad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:figma-logo-thin"} {...others} />);
}

export default Component;
