import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e1_kprigi {
  fill: currentColor;
  d: path("M2 19V5h20v14zm3.5-1h13V6h-13zm3-6.808v-.884h7v.884zm1 3v-.884h5v.884z");
}
</style><path class="e1_kprigi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:aod-tablet-sharp"} {...others} />);
}

export default Component;
