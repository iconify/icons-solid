import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mjo_wjbji {
  fill: currentColor;
  d: path("M8 12h8v-2H8zm0-4h8V6H8zm12 12.55L14.975 14H4V2h16zM4 22v-6h10l4.6 6z");
}
</style><path class="mjo_wjbji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:lab-profile-sharp"} {...others} />);
}

export default Component;
