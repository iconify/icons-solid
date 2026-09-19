import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gicq1ybrs {
  fill: currentColor;
  d: path("M19 19H5V5h9V3H3v18h18V10h-2z");
}

.uc7ekibzy {
  fill: currentColor;
  d: path("M11 7h2v10h-2zm4 6h2v4h-2zm-8-3h2v7H7zm12-5V3h-2v2h-2v2h2v2h2V7h2V5z");
}
</style><path class="gicq1ybrs"/><path class="uc7ekibzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-add-chart"} {...others} />);
}

export default Component;
