import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gb5ovy6fx {
  fill: currentColor;
  d: path("M12.08 18H4V8l8 5l8-5v4.08c.71.1 1.38.31 2 .6V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h8.08c-.05-.33-.08-.66-.08-1s.03-.67.08-1M20 6l-8 5l-8-5zm-2.66 16l-3.54-3.54l1.41-1.41l2.12 2.12l4.24-4.24L23 16.34z");
}

.qkc_pnhru {
  fill: currentColor;
  d: path("M20 8v4.08c-.33-.05-.66-.08-1-.08c-3.53 0-6.43 2.61-6.92 6H4V8l8 5zm0-2H4l8 5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="qkc_pnhru"/><path class="gb5ovy6fx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-mark-email-read"} {...others} />);
}

export default Component;
