import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wl09up0vn {
  fill: currentColor;
  d: path("M4 21v-7.154h2V8.077h5.5V6.588q-.43-.28-.715-.638t-.285-.84q0-.3.112-.568t.334-.488L12 3l1.052 1.052q.225.225.337.491t.111.568q0 .481-.285.839q-.284.358-.715.638v1.489H18v5.77h2V21zm3-7.154h10V9.077H7zM5 20h14v-5.154H5zm2-6.154h10zM5 20h14zm13-6.154H6z");
}
</style><path class="wl09up0vn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:cake-outline-sharp"} {...others} />);
}

export default Component;
