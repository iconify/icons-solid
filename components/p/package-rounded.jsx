import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ni7-f0tha {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm4.45-8.725L12 11l2.55 1.275q.5.25.975-.038t.475-.862V5H8v6.375q0 .575.475.863t.975.037M8 17h3q.425 0 .713-.288T12 16t-.288-.712T11 15H8q-.425 0-.712.288T7 16t.288.713T8 17");
}
</style><path class="ni7-f0tha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:package-rounded"} {...others} />);
}

export default Component;
