import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrhwhdtsn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 2.75h6.5q2.75 0 2.75 2.75v13q0 2.75-2.75 2.75h-13q-2.75 0-2.75-2.75v-13q0-1.139.805-1.945q.806-.805 1.945-.805zm.75 17h5.75q1.25 0 1.25-1.25v-13q0-1.25-1.25-1.25h-5.75z");
}
</style><path class="nrhwhdtsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:square-half"} {...others} />);
}

export default Component;
