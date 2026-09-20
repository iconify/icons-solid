import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.he5jmsbko {
  fill: var(--svg-color--dc1f26, #dc1f26);
  d: path("M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4");
}

.pd-hacc_i {
  fill: var(--svg-color--eee, #eee);
  d: path("M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-9h36z");
}
</style><path class="he5jmsbko"/><path class="pd-hacc_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:flag-indonesia"} {...others} />);
}

export default Component;
