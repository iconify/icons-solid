import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jdjt0cbnh {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v4q0 .425-.288.713T21 11q-.425 0-.713-.288T20 10V6H4v12h10q.425 0 .713.288T15 19q0 .425-.288.713T14 20H4Zm14 0q-.425 0-.713-.288T17 19v-5q0-.425.288-.713T18 13h3q.425 0 .713.288T22 14v5q0 .425-.288.713T21 20h-3Zm-6-8Z");
}
</style><path class="jdjt0cbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:float-landscape-outline-rounded"} {...others} />);
}

export default Component;
