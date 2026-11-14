import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m7objubac {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9 2.75h6q2.75 0 2.75 2.75T15 8.25H9q-2.75 0-2.75-2.75T9 2.75m8 6.5H7q-2.75 0-2.75 2.75T7 14.75h10q2.75 0 2.75-2.75T17 9.25m-12 6.5h14q2.75 0 2.75 2.75T19 21.25H5q-2.75 0-2.75-2.75q0-1.139.805-1.945q.806-.805 1.945-.805");
}
</style><path class="m7objubac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:data-layers"} {...others} />);
}

export default Component;
