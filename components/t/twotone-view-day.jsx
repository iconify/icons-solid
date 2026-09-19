import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a3mcakzbn {
  fill: currentColor;
  d: path("M4 10h15v4H4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.e3z3yxb4u {
  fill: currentColor;
  d: path("M2 18h19v2H2zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 6H4v-4h15zM2 4h19v2H2z");
}
</style><path class="a3mcakzbn"/><path class="e3z3yxb4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-view-day"} {...others} />);
}

export default Component;
