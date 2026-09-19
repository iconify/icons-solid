import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fslpexb5p {
  fill: currentColor;
  d: path("M6 17.59L7.41 19L12 14.42L16.59 19L18 17.59l-6-6z");
}

.x_--2ub-q {
  fill: currentColor;
  d: path("m6 11l1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z");
}
</style><path class="fslpexb5p"/><path class="x_--2ub-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-keyboard-double-arrow-up"} {...others} />);
}

export default Component;
