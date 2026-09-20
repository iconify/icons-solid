import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.az8j-mbjx {
  fill: currentColor;
  d: path("M6 18h12v-2H6zm-3 3V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="az8j-mbjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:toast-outline-sharp"} {...others} />);
}

export default Component;
