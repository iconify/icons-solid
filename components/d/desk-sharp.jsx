import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wy07ibbyn {
  fill: currentColor;
  d: path("M3.077 17.5V7.077h17.846V17.5h-1v-2h-4.711v2h-1V8.077H4.077V17.5zm12.135-7h4.711V8.077h-4.711zm0 4h4.711v-3h-4.711z");
}
</style><path class="wy07ibbyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:desk-sharp"} {...others} />);
}

export default Component;
