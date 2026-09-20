import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zrsy49b1b {
  fill: currentColor;
  d: path("M3 19v-1h16.385q.23 0 .423-.192t.192-.424V5h1v12.385q0 .69-.462 1.153T19.385 19zm6.923-3.384V9.923h7.693v5.693z");
}
</style><path class="zrsy49b1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:picture-in-picture-small-outline"} {...others} />);
}

export default Component;
