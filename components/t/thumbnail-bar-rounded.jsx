import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ye60xpxiv {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h4v16zm6 0V4h10q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z");
}
</style><path class="ye60xpxiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:thumbnail-bar-rounded"} {...others} />);
}

export default Component;
