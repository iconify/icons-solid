import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f2g__g2nv {
  fill: currentColor;
  d: path("M15 16h4v-4h-1.5v2.5H15zM5 10h1.5V7.5H9V6H5zm3 11v-2H4q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v12q0 .825-.587 1.413T20 19h-4v2z");
}
</style><path class="f2g__g2nv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:screenshot-monitor"} {...others} />);
}

export default Component;
