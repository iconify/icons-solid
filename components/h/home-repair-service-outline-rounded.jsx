import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t-au54b-z {
  fill: currentColor;
  d: path("M2 19v-9q0-.825.588-1.412T4 8h3V6q0-.825.588-1.412T9 4h6q.825 0 1.413.588T17 6v2h3q.825 0 1.413.588T22 10v9q0 .425-.288.713T21 20H3q-.425 0-.712-.288T2 19m6-4q0 .425-.288.713T7 16t-.712-.288T6 15H4v3h16v-3h-2q0 .425-.288.713T17 16t-.712-.288T16 15zm-4-5v3h2q0-.425.288-.712T7 12t.713.288T8 13h8q0-.425.288-.712T17 12t.713.288T18 13h2v-3zm5-2h6V6H9z");
}
</style><path class="t-au54b-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:home-repair-service-outline-rounded"} {...others} />);
}

export default Component;
