import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iooqab4ft {
  fill: currentColor;
  d: path("M6 21q-.825 0-1.412-.587T4 19V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v14q0 .825-.587 1.413T18 21zm0-10h5v-.5q0-.2.15-.35t.35-.15h1q.2 0 .35.15t.15.35v.5h5V5H6zm0 8h12z");
}
</style><path class="iooqab4ft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:window-open-outline-rounded"} {...others} />);
}

export default Component;
