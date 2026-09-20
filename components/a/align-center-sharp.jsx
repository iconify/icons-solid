import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c1t7h65-t {
  fill: currentColor;
  d: path("M3 12.5v-1h18v1zm4.5-3v-2h9v2zm0 7v-2h9v2z");
}
</style><path class="c1t7h65-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-center-sharp"} {...others} />);
}

export default Component;
