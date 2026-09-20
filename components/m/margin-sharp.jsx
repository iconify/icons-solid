import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ibtz_jbig {
  fill: currentColor;
  d: path("M3 21V3h18v18zM7 9h2V7H7zm4 0h2V7h-2zm4 0h2V7h-2zm-8 4h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2z");
}
</style><path class="ibtz_jbig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:margin-sharp"} {...others} />);
}

export default Component;
