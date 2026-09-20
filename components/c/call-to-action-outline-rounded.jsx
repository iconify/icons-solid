import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v82gk9oxq {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zm0 0V6zm3.5-1h9q.625 0 1.063-.437T18 15.5t-.437-1.062T16.5 14h-9q-.625 0-1.062.438T6 15.5t.438 1.063T7.5 17");
}
</style><path class="v82gk9oxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:call-to-action-outline-rounded"} {...others} />);
}

export default Component;
