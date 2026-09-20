import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m9q5mbbtt {
  fill: currentColor;
  d: path("M12 16.5q-.425 0-.712-.288T11 15.5V12q0-.425.288-.712T12 11t.713.288T13 12v3.5q0 .425-.288.713T12 16.5M12 9q-.425 0-.712-.288T11 8t.288-.712T12 7t.713.288T13 8t-.288.713T12 9M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-5h10V6H7z");
}
</style><path class="m9q5mbbtt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:perm-device-information-rounded"} {...others} />);
}

export default Component;
