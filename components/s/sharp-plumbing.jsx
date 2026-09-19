import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ic-8_09wp {
  fill: currentColor;
  d: path("m16.16 5.64l3.54 3.54a3 3 0 0 0 0-4.24L16.16 1.4l-4.24 4.24l2.12 2.12zM4.842 12.708l3.535-3.535l2.122 2.12l-3.536 3.536z");
}

.s5kxvcp2k {
  fill: currentColor;
  d: path("m15.45 7.76l-1.41 1.41l-4.25-4.24l-2.12 2.12l4.24 4.24l-8.49 8.49l2.83 2.83L16.86 12l.71.71l1.41-1.41z");
}
</style><path class="ic-8_09wp"/><path class="s5kxvcp2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-plumbing"} {...others} />);
}

export default Component;
