import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w969ec-iy {
  fill: currentColor;
  d: path("M20 19V5c0-1.1-.9-2-2-2h-5.25v16h-1.5V3H6c-1.1 0-2 .9-2 2v14H3v2h18v-2zm-10-6H8v-2h2zm6 0h-2v-2h2z");
}
</style><path class="w969ec-iy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-door-sliding"} {...others} />);
}

export default Component;
