import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m_w5v0l8w {
  fill: currentColor;
  d: path("M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10s10-4.48 10-10m-7-5.5l3.5 3.5l-3.5 3.5V11h-4V9h4zm-6 11L5.5 14L9 10.5V13h4v2H9z");
}
</style><path class="m_w5v0l8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-swap-horizontal-circle"} {...others} />);
}

export default Component;
