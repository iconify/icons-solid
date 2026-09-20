import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.gdwmsnb0w {
  fill: var(--svg-color--ffac33, #ffac33);
  d: path("M32 32a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4z");
}

.kuhfyzbzs {
  fill: var(--svg-color--aab8c2, #aab8c2);
  d: path("M18 0C12.477 0 8 4.477 8 10v10h4V10a6 6 0 0 1 12 0v10h4V10c0-5.523-4.477-10-10-10");
}
</style><path class="kuhfyzbzs"/><path class="gdwmsnb0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:locked"} {...others} />);
}

export default Component;
