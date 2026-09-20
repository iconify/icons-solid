import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nltnj-wtr {
  fill: currentColor;
  d: path("M8.77 17V4h6.46v13zm1-1h4.46V5H9.77zm-1 3.385v-1h6.46v1zm1-3.385h4.46z");
}
</style><path class="nltnj-wtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:general-device-outline-sharp"} {...others} />);
}

export default Component;
