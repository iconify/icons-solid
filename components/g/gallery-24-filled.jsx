import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ctlbj0brn {
  d: path("M11.25 21v-8.25H3v6A2.25 2.25 0 0 0 5.25 21h6z");
  fill: currentColor;
}

.ft5dv1b6b {
  fill: none;
}

.lm0vo_byc {
  d: path("M5.25 3A2.25 2.25 0 0 0 3 5.25v6h8.25V3h-6z");
  fill: currentColor;
}

.nfy82acdz {
  d: path("M12.75 3v8.25H21v-6A2.25 2.25 0 0 0 18.75 3h-6z");
  fill: currentColor;
}

.zcu443a_b {
  d: path("M21 12.75h-8.25V21h6A2.25 2.25 0 0 0 21 18.75v-6z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="lm0vo_byc"/><path class="nfy82acdz"/><path class="zcu443a_b"/><path class="ctlbj0brn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:gallery-24-filled"} {...others} />);
}

export default Component;
