import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qy94eytnm {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.5 3Q4 3 4 7.75t3.5 4.75T11 7.75T7.5 3m5.5 8q0-4.75 3.5-4.75T20 11t-3.5 4.75T13 11m-5.5 1.75q-3 0-3 2.5t3 2.5t3-2.5t-3-2.5m6 5.751v-.002q0-1.091.948-1.829q.862-.671 2.052-.671t2.052.671q.949.738.948 1.829q.001 1.093-.948 1.831q-.862.671-2.052.671t-2.052-.671q-.948-.738-.948-1.829");
}
</style><path class="qy94eytnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:gemba-walk"} {...others} />);
}

export default Component;
