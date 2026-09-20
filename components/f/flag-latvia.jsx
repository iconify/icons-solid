import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.mb_xrpbdk {
  fill: var(--svg-color--eee, #eee);
  d: path("M0 15h36v6H0z");
}

.suloaubpi {
  fill: var(--svg-color--9e3039, #9e3039);
  d: path("M32 5H4a4 4 0 0 0-4 4v6h36V9a4 4 0 0 0-4-4m0 26H4a4 4 0 0 1-4-4v-6h36v6a4 4 0 0 1-4 4");
}
</style><path class="suloaubpi"/><path class="mb_xrpbdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:flag-latvia"} {...others} />);
}

export default Component;
