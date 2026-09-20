import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.efwcc2bde {
  fill: currentColor;
  d: path("M13 15h1.5v-2.25L16.25 15h1.825l-2.325-3l2.325-3H16.25l-1.75 2.25V9H13zm-6.5 0H11v-1.5H8v-1h3V9H6.5v1.5h3v1h-3zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="efwcc2bde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:2k-outline-sharp"} {...others} />);
}

export default Component;
