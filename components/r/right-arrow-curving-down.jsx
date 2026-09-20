import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.dgcfgs50b {
  fill: var(--svg-color--fff, #fff);
  d: path("m20.589 30.2l6-7.2H23v-7.611c0-5.523-4.683-10-10.206-10c-1.414 0-2.861.297-4.081.827l2.699 3.3a8 8 0 0 1 1.408-.127c3.314 0 6.18 2.686 6.18 6V23h-4.411z");
}

.x-kz1kb7j {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}
</style><path class="x-kz1kb7j"/><path class="dgcfgs50b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:right-arrow-curving-down"} {...others} />);
}

export default Component;
