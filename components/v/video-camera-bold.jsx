import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.jpwjprbjh {
  fill: currentColor;
  d: path("M249.45 69.31a12 12 0 0 0-12.51 1L212 88.43V72a20 20 0 0 0-20-20H32a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-16.43l24.94 18.14A12 12 0 0 0 256 176V80a12 12 0 0 0-6.55-10.69M188 180H36V76h152Zm44-27.57l-20-14.54v-19.78l20-14.54Z");
}
</style><path class="jpwjprbjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:video-camera-bold"} {...others} />);
}

export default Component;
