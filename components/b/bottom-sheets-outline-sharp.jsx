import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ew2xp-bxh {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-7.384h14V5H5zm0 1V19h14v-5.384zm0 0V19z");
}
</style><path class="ew2xp-bxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:bottom-sheets-outline-sharp"} {...others} />);
}

export default Component;
