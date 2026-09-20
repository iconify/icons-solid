import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.noje9kb3p {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M67.68 95.55h18.03v-63.1H67.68zm36.05-63.1v63.09h18.03V32.45zm-97.49-.28v63.66L56.26 64z");
}
</style><path class="noje9kb3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:play-or-pause-button"} {...others} />);
}

export default Component;
