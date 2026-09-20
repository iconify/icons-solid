import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k377agbtq {
  fill: currentColor;
  d: path("M6.2 18h2.6v-.325H7.525L8.85 14h3.35l1.25 3.675h-1.2V18h5.55v-.325h-.775L12.725 6H11.35L7 17.675h-.8zM9 13.625l1.6-4.45l1.475 4.45zM4 22q-.825 0-1.412-.587T2 20V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v16q0 .825-.587 1.413T20 22z");
}
</style><path class="k377agbtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:serif"} {...others} />);
}

export default Component;
