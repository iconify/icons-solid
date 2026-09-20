import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g_mxupb-a {
  fill: currentColor;
  d: path("M9 17q-.825 0-1.412-.587T7 15V9q0-.825.588-1.412T9 7h6q.425 0 .713.288T16 8t-.288.713T15 9H9v6h5v-2h-1q-.425 0-.712-.288T12 12t.288-.712T13 11h2q.425 0 .713.288T16 12v3q0 .825-.587 1.413T14 17z");
}
</style><path class="g_mxupb-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:g-mobiledata-rounded"} {...others} />);
}

export default Component;
