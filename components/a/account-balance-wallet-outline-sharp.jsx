import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qq90-igkg {
  fill: currentColor;
  d: path("M5 19V5zM21 7.5h-2V5H5v14h14v-2.5h2V21H3V3h18zM11 17V7h11v10zm6.063-3.937q.437-.438.437-1.063t-.437-1.062T16 10.5t-1.062.438T14.5 12t.438 1.063T16 13.5t1.063-.437M20 15V9h-7v6z");
}
</style><path class="qq90-igkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:account-balance-wallet-outline-sharp"} {...others} />);
}

export default Component;
