import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vxq6qkb4h {
  fill: currentColor;
  d: path("m17.966 9.792l-.708-.719l1.727-1.715l.707.708zM2.5 19.5v-1h19v1zm9-12.27V4.847h1v2.385zM6.034 9.78L4.32 8.055l.708-.708l1.727 1.727zM6.116 15q.346-2.175 2.008-3.588T12 10t3.876 1.413T17.884 15z");
}
</style><path class="vxq6qkb4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:wb-twilight"} {...others} />);
}

export default Component;
