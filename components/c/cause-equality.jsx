import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j4p7o9bsq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.5 5.75h-13q-1.139 0-1.945.805q-.805.806-.805 1.945q0 2.75 2.75 2.75h13q2.75 0 2.75-2.75T18.5 5.75m-13 7h13q2.75 0 2.75 2.75t-2.75 2.75h-13q-2.75 0-2.75-2.75q0-1.139.805-1.945q.806-.805 1.945-.805");
}
</style><path class="j4p7o9bsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:cause-equality"} {...others} />);
}

export default Component;
