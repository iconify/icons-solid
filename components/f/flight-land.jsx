import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v_j_vxtdy {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm15.55-5.05L3 11.525V4.25l2.4.675L6.6 8.4l3.45.975L9.175.8l2.875.85l3.2 9.225l4.3 1.225q.625.2 1.038.725t.412 1.2q0 .875-.712 1.537t-1.738.388");
}
</style><path class="v_j_vxtdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:flight-land"} {...others} />);
}

export default Component;
