import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tc96-ibom {
  fill: currentColor;
  d: path("M8 22q-.825 0-1.412-.587T6 20v-8q0-.825.588-1.412T8 10h8q.825 0 1.413.588T18 12v8q0 .825-.587 1.413T16 22zm8.288-14.288Q16 7.425 16 7t.288-.712T17 6t.713.288T18 7t-.288.713T17 8t-.712-.288m0-4Q16 3.426 16 3t.288-.712T17 2t.713.288T18 3t-.288.713T17 4t-.712-.288m-5 0Q11 3.426 11 3t.288-.712T12 2t.713.288T13 3t-.288.713T12 4t-.712-.288m-5 0Q6 3.426 6 3t.288-.712T7 2t.713.288T8 3t-.288.713T7 4t-.712-.288m0 4Q6 7.426 6 7t.288-.712T7 6t.713.288T8 7t-.288.713T7 8t-.712-.288");
}
</style><path class="tc96-ibom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:move-selection-down-rounded"} {...others} />);
}

export default Component;
