import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.shluewb7s {
  fill: currentColor;
  d: path("M4 20V4h16v16zm8.5-15v6.116l2-1.193l2 1.193V5z");
}
</style><path class="shluewb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:developer-guide-sharp"} {...others} />);
}

export default Component;
