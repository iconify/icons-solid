import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oy1bwzb8k {
  fill: currentColor;
  d: path("M6 22q-1.25 0-2.125-.875T3 19v-3h3V2h15v17q0 1.25-.875 2.125T18 22zm12-2q.425 0 .713-.288T19 19V4H8v12h9v3q0 .425.288.713T18 20M9 9V7h9v2zm0 3v-2h9v2zm-3 8h9v-2H5v1q0 .425.288.713T6 20m0 0H5h10z");
}
</style><path class="oy1bwzb8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:contract-outline-sharp"} {...others} />);
}

export default Component;
