import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nn4xzfalb {
  fill: currentColor;
  d: path("M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16zm-5.5-8L11 12.51L8.5 9.5L5 14h14z");
}

.owfwhrbqi {
  fill: currentColor;
  d: path("M4 17.17L5.17 16H20V4H4zM8.5 9.5l2.5 3.01L14.5 8l4.5 6H5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="owfwhrbqi"/><path class="nn4xzfalb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-mms"} {...others} />);
}

export default Component;
