import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tb2oqdfvz {
  fill: currentColor;
  d: path("M3 22V4h3V2h2v2h8V2h2v2h3v8.375l-2 2V10H5v10h6.2l2 2zm13.55.5L13 18.95l1.4-1.4l2.125 2.125l4.25-4.25l1.4 1.425z");
}
</style><path class="tb2oqdfvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:calendar-check-sharp"} {...others} />);
}

export default Component;
