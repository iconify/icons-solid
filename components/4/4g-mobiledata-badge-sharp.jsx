import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xzzqn_q6t {
  fill: currentColor;
  d: path("M13 17h7v-6h-3.5v2H18v2h-3V9h5V7h-7zm-5 0h2v-3h2v-2h-2V7H8v5H6V7H4v7h4zm-7 4V3h22v18z");
}
</style><path class="xzzqn_q6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:4g-mobiledata-badge-sharp"} {...others} />);
}

export default Component;
