import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d4zzrzb5l {
  fill: currentColor;
  d: path("M7 9h2V7H7zm4 0h2V7h-2zm4 0h2V7h-2zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="d4zzrzb5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:padding-outline-sharp"} {...others} />);
}

export default Component;
