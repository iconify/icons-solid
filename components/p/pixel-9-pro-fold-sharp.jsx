import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h0qcyubtc {
  fill: currentColor;
  d: path("M2 21V3h20v18zm10-2h8V5h-8zm-2-7v-2H4v2zm6-4q.425 0 .713-.288T17 7t-.288-.712T16 6t-.712.288T15 7t.288.713T16 8m-6 0V6H4v2z");
}
</style><path class="h0qcyubtc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pixel-9-pro-fold-sharp"} {...others} />);
}

export default Component;
