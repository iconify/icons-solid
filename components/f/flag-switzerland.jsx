import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.alw03nfmq {
  fill: var(--svg-color--fff, #fff);
  d: path("M25 16.063h-5v-5h-4v5h-5V20h5v5.063h4V20h5z");
}

.p4oh0gb8h {
  fill: var(--svg-color--d32d27, #d32d27);
  d: path("M31 27a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h18a4 4 0 0 1 4 4z");
}
</style><path class="p4oh0gb8h"/><path class="alw03nfmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:flag-switzerland"} {...others} />);
}

export default Component;
