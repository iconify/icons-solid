import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bab7bjbci {
  fill: currentColor;
  d: path("M3 19q-.825 0-1.412-.587T1 17V7q0-.825.588-1.412T3 5h10q.825 0 1.413.588T15 7v10q0 .825-.587 1.413T13 19zm14.288-.288Q17 18.426 17 18V6q0-.425.288-.712T18 5t.713.288T19 6v12q0 .425-.288.713T18 19t-.712-.288m4 0Q21 18.426 21 18V6q0-.425.288-.712T22 5t.713.288T23 6v12q0 .425-.288.713T22 19t-.712-.288");
}
</style><path class="bab7bjbci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:overview-key-rounded"} {...others} />);
}

export default Component;
