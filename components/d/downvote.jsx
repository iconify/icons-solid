import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oxk3bsbsu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.44 10.75h-.69V4.5q0-1.75-1.75-1.75h-4q-1.75 0-1.75 1.75v6.25h-.69q-1.645 0-2.296 1.511t.479 2.706l4.44 4.701q.74.783 1.817.783t1.817-.783l4.44-4.701q1.13-1.195.479-2.706T16.44 10.75M9.75 4.5q0-.25.25-.25h4q.25 0 .25.25v6.25h-4.5z");
}
</style><path class="oxk3bsbsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:downvote"} {...others} />);
}

export default Component;
