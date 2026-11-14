import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iojz2bcqb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 4.75h12q.182 0 .359.013q-.064.013-.124.036q-.061.023-.117.056t-.105.075q-.05.042-.091.092t-.074.107q-.032.056-.054.117t-.033.125t-.011.129v13q0 .065.011.129t.033.125t.054.117q.033.057.074.107t.091.092q.049.042.105.075t.117.056q.06.023.124.036q-.177.013-.359.013H6q-.182 0-.359-.013q.064-.013.124-.036q.061-.023.117-.056t.105-.075t.091-.092t.074-.107t.054-.117t.033-.125t.011-.129v-13q0-.065-.011-.129t-.033-.125t-.054-.117q-.033-.057-.074-.107t-.091-.092q-.049-.042-.105-.075t-.117-.056q-.06-.023-.124-.036q.177-.013.359-.013");
}
</style><path class="iojz2bcqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:pillarbox"} {...others} />);
}

export default Component;
