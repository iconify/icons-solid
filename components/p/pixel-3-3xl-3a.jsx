import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x7nnnbc_j {
  fill: currentColor;
  d: path("M9 6q.425 0 .713-.288T10 5q0-.425-.288-.713T9 4q-.425 0-.713.288T8 5q0 .425.288.713T9 6ZM7 23q-.825 0-1.413-.588T5 21V3q0-.825.588-1.413T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.588 1.413T17 23H7Z");
}
</style><path class="x7nnnbc_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pixel-3-3xl-3a"} {...others} />);
}

export default Component;
