import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bi-aiw4wk {
  fill: currentColor;
  d: path("M9.175 19.825Q8 18.65 8 17t1.175-2.825T12 13q.575 0 1.063.138t.937.412V4q0-.425.288-.712T15 3h4q.425 0 .713.288T20 4v2q0 .425-.288.713T19 7h-3v10q0 1.65-1.175 2.825T12 21t-2.825-1.175M7 8H5q-.425 0-.712-.288T4 7t.288-.712T5 6h2V4q0-.425.288-.712T8 3t.713.288T9 4v2h2q.425 0 .713.288T12 7t-.288.713T11 8H9v2q0 .425-.288.713T8 11t-.712-.288T7 10z");
}
</style><path class="bi-aiw4wk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:music-note-add-outline-rounded"} {...others} />);
}

export default Component;
