import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k_rucz0wp {
  fill: currentColor;
  d: path("m21 9l-6-6H3v18h18zM7 7h7v2H7zm10 10H7v-2h10zm0-4H7v-2h10z");
}
</style><path class="k_rucz0wp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-text-snippet"} {...others} />);
}

export default Component;
