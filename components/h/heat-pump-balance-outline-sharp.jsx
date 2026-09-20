import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rza03q0xx {
  fill: currentColor;
  d: path("M4 6.6h2v10h2v-10h6v10h2v-11h4.175L19 4.425L20.4 3L24 6.6l-3.6 3.575L19 8.75l1.175-1.15H18v11h-6v-10h-2v10H4zm-3 15v-10h22v10zm2-2h18v-6H3zm18-6H3z");
}
</style><path class="rza03q0xx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:heat-pump-balance-outline-sharp"} {...others} />);
}

export default Component;
