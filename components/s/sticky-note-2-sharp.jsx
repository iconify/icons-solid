import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wi46_txum {
  fill: currentColor;
  d: path("M19 14h-5v5zM3 21V3h18v12l-6 6zm4-7h5v-2H7zm0-4h10V8H7z");
}
</style><path class="wi46_txum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sticky-note-2-sharp"} {...others} />);
}

export default Component;
