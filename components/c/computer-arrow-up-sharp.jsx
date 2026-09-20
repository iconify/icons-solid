import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h2zgr4bei {
  fill: currentColor;
  d: path("M11 14.5h2v-4.175l1.6 1.575l1.4-1.4l-4-4l-4 4l1.4 1.425l1.6-1.6zM1 21v-2h22v2zm1-3V3h20v15z");
}
</style><path class="h2zgr4bei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:computer-arrow-up-sharp"} {...others} />);
}

export default Component;
