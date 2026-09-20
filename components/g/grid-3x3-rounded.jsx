import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ebj1rib2k {
  fill: currentColor;
  d: path("M8 16H5q-.425 0-.712-.288T4 15t.288-.712T5 14h3v-4H5q-.425 0-.712-.288T4 9t.288-.712T5 8h3V5q0-.425.288-.712T9 4t.713.288T10 5v3h4V5q0-.425.288-.712T15 4t.713.288T16 5v3h3q.425 0 .713.288T20 9t-.288.713T19 10h-3v4h3q.425 0 .713.288T20 15t-.288.713T19 16h-3v3q0 .425-.288.713T15 20t-.712-.288T14 19v-3h-4v3q0 .425-.288.713T9 20t-.712-.288T8 19zm2-2h4v-4h-4z");
}
</style><path class="ebj1rib2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:grid-3x3-rounded"} {...others} />);
}

export default Component;
