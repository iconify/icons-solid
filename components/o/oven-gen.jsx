import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sfz--ubvl {
  fill: currentColor;
  d: path("M3 12v7q0 .825.588 1.413T5 21h14q.825 0 1.413-.587T21 19v-7h-4v5H7v-5zm6 3h6v-3H9zm-6-5h18V5q0-.825-.587-1.412T19 3H5q-.825 0-1.412.588T3 5zm4.288-2.287Q7 7.425 7 7t.288-.712T8 6t.713.288T9 7t-.288.713T8 8t-.712-.288m4 0Q11 7.426 11 7t.288-.712T12 6t.713.288T13 7t-.288.713T12 8t-.712-.288m4 0Q15 7.426 15 7t.288-.712T16 6t.713.288T17 7t-.288.713T16 8t-.712-.288");
}
</style><path class="sfz--ubvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:oven-gen"} {...others} />);
}

export default Component;
