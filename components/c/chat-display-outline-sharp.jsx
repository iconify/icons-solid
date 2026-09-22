import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h0uzszbqu {
  fill: currentColor;
  d: path("M4 12.5v5.144V4zm2.5-2h11v-1h-11zm0-3h11v-1h-11zM3 20.077V3h18v9.5h-1V4H4v13.644L5.65 16h4.292v1H6.077zM6.5 13.5h3.442v-1H6.5zm5.827 7.5v-6.115H21V21zm1-1H20v-4.115h-6.673z");
}
</style><path class="h0uzszbqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:chat-display-outline-sharp"} {...others} />);
}

export default Component;
