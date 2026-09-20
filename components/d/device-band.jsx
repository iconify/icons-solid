import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ob79izbzi {
  fill: currentColor;
  d: path("M10 22q-.825 0-1.412-.587T8 20V9q-.425 0-.712-.288T7 8V7q0-.425.288-.712T8 6V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2q.425 0 .713.288T17 7v1q0 .425-.288.713T16 9v11q0 .825-.587 1.413T14 22z");
}
</style><path class="ob79izbzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:device-band"} {...others} />);
}

export default Component;
