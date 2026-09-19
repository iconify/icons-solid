import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.amiif-b9a {
  fill: currentColor;
  d: path("M15 6H4v12.01h16V11h-5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.ogzgctwmp {
  fill: currentColor;
  d: path("M4 4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99h16c1.1 0 2-.9 2-2v-8l-6-6zm16 14.01H4V6h11v5h5z");
}
</style><path class="amiif-b9a"/><path class="ogzgctwmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-note"} {...others} />);
}

export default Component;
