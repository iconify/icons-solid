import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u4q5htp0n {
  fill: currentColor;
  d: path("M10.23 20.77Q9.5 20.037 9.5 19t.73-1.77T12 16.5t1.77.73t.73 1.77t-.73 1.77t-1.77.73t-1.77-.73m1.27-8.691V3.712q0-.214.143-.357T12 3.212t.357.143t.143.357v8.386l2.721-2.74q.14-.16.341-.16t.367.16q.165.165.165.357q0 .19-.165.356l-3.363 3.364q-.243.242-.566.242t-.565-.242l-3.389-3.389q-.14-.14-.143-.341t.143-.347q.14-.16.354-.15t.354.15z");
}
</style><path class="u4q5htp0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:step-into-rounded"} {...others} />);
}

export default Component;
