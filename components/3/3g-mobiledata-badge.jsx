import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cdh-_b91g {
  fill: currentColor;
  d: path("M3 21q-.825 0-1.412-.587T1 19V5q0-.825.588-1.412T3 3h18q.825 0 1.413.588T23 5v14q0 .825-.587 1.413T21 21zm16-10h-3v2h1v2h-3V9h5q0-.825-.587-1.412T17 7h-3q-.825 0-1.412.588T12 9v6q0 .825.588 1.413T14 17h3q.825 0 1.413-.587T19 15zM5 17h4q.825 0 1.413-.587T11 15v-1.5q0-.625-.437-1.062T9.5 12q.625 0 1.063-.437T11 10.5V9q0-.825-.587-1.412T9 7H5v2h4v2H5v2h4v2H5z");
}
</style><path class="cdh-_b91g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:3g-mobiledata-badge"} {...others} />);
}

export default Component;
