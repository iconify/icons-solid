import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d3v-exmqm {
  fill: currentColor;
  d: path("M3 19q-.825 0-1.412-.587T1 17V7q0-.825.588-1.412T3 5h10q.825 0 1.413.588T15 7v10q0 .825-.587 1.413T13 19zm1-4h8l-2.6-3.5L7.5 14l-1.4-1.85zm13 4V5h2v14zm4 0V5h2v14z");
}
</style><path class="d3v-exmqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:art-track"} {...others} />);
}

export default Component;
