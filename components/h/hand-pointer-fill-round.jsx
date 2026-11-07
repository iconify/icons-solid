import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p8v_wu1sb {
  fill: currentColor;
  d: path("M8 5a1.999 1.999 0 0 1 3.001-1.732C11.619 3.626 12 4.285 12 5v8a.5.5 0 0 0 1 0v-3a2 2 0 1 1 4 0v3a.5.5 0 0 0 1 0v-2a1.999 1.999 0 0 1 3.001-1.732c.618.358.999 1.017.999 1.732v5a6 6 0 0 1-6 6h-4c-1.039 0-1.992-.578-2.707-1.293l-6-6a2 2 0 0 1 2.828-2.828L8 13.757Z");
}
</style><path class="p8v_wu1sb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hand-pointer-fill-round"} {...others} />);
}

export default Component;
