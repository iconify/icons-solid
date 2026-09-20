import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t23ow0bwt {
  fill: currentColor;
  d: path("M6 21q-.825 0-1.412-.587T4 19v-4h16v4q0 .825-.587 1.413T18 21zm-4-8v-2h2V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v6h2v2z");
}
</style><path class="t23ow0bwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:split-scene-2"} {...others} />);
}

export default Component;
