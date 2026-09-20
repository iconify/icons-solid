import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kayxdc_nz {
  fill: currentColor;
  d: path("M4 20v-2h16v2H4Z");
}
</style><path class="kayxdc_nz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chrome-minimize"} {...others} />);
}

export default Component;
