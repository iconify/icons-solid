import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k0_7oxbog {
  fill: currentColor;
  d: path("M17.85 3H6.14C4.15 3 2.36 4.39 2.05 6.36c-.27 1.75.59 3.29 1.95 4.09V21h16V10.45a4 4 0 0 0 1.95-4.11C21.63 4.38 19.83 3 17.85 3m-1.44 10L12 17.42L7.59 13L12 8.59z");
}
</style><path class="k0_7oxbog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-breakfast-dining"} {...others} />);
}

export default Component;
