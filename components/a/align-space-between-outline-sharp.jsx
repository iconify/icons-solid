import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pyubxpfrq {
  fill: currentColor;
  d: path("M7.5 6V4H3V3h18v1h-4.5v2zM3 21v-1h4.5v-2h9v2H21v1z");
}
</style><path class="pyubxpfrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-space-between-outline-sharp"} {...others} />);
}

export default Component;
