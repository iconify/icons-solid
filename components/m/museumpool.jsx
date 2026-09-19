import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j-xpe9c_h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.717 20.39h.07m0 0l4.212 3.657l4.213-3.658m0 0h.07m-8.495 6.25l4.212 3.599l4.213-3.598M9.249 20.39v15.996H7.092v1.366H5.5v3.592h37v-3.592h-1.593v-1.366h-2.158V20.39h-4.144v15.999h-2.25v-16h-4.144v15.999h-8.425V20.389h-4.145v15.999h-2.249V20.389zm-2.006-4.543h33.513v4.542H7.243zm31.393 0v-2.11l-14.574-7.08l-14.573 7.082v2.109z");
}
</style><path class="j-xpe9c_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:museumpool"} {...others} />);
}

export default Component;
