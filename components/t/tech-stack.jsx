import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q7mftubdn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9 2.25h6q2.75 0 2.75 2.75T15 7.75H9Q6.25 7.75 6.25 5T9 2.25M17.5 9h-11q-2.75 0-2.75 2.75T6.5 14.5h11q2.75 0 2.75-2.75T17.5 9m-13 6.75h15q2.75 0 2.75 2.75t-2.75 2.75h-15q-2.75 0-2.75-2.75q0-1.139.805-1.945q.806-.805 1.945-.805");
}
</style><path class="q7mftubdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:tech-stack"} {...others} />);
}

export default Component;
