import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.g8i3k_jvl {
  fill: currentColor;
  d: path("m243.68 150.42l-48-112A4 4 0 0 0 192 36H64a4 4 0 0 0-3.68 2.42l-48 112A4 4 0 0 0 16 156h108v56H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8h-28v-56h64v36a4 4 0 0 0 8 0v-36h36a4 4 0 0 0 3.68-5.58M22.07 148L66.64 44h122.72l44.57 104Z");
}
</style><path class="g8i3k_jvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:lamp-thin"} {...others} />);
}

export default Component;
