import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dpjy1qunb {
  fill: currentColor;
  d: path("M8 22h5v-4H6v2q0 .825.588 1.413T8 22m7 0h5q.825 0 1.413-.587T22 20v-2h-7zM2 18V4q0-.825.588-1.412T4 2h14v2H4v14zm4-2h7v-4H6zm9 0h7v-4h-7zm-9-6h16V8q0-.825-.587-1.412T20 6H8q-.825 0-1.412.588T6 8z");
}
</style><path class="dpjy1qunb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:table-view"} {...others} />);
}

export default Component;
