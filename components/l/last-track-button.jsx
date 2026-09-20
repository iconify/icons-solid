import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.x-kz1kb7j {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}

.zewbvhb7f {
  fill: var(--svg-color--fff, #fff);
  d: path("M9 18L21 7v9.166L31 7v22l-10-9.167V29zm0 11H5V7h4z");
}
</style><path class="x-kz1kb7j"/><path class="zewbvhb7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:last-track-button"} {...others} />);
}

export default Component;
