import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uxut_gb8n {
  fill: currentColor;
  d: path("M4 19V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v14h1q.425 0 .713.288T22 20t-.288.713T21 21H3q-.425 0-.712-.288T2 20t.288-.712T3 19zm2-8h12V5H6zm0 8h12v-6h-5v1.8q.35.25.55.625t.2.825q0 .725-.513 1.238T12 18t-1.237-.513t-.513-1.237q0-.45.2-.812t.55-.613V13H6zM6 5h12z");
}
</style><path class="uxut_gb8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:roller-shades-outline-rounded"} {...others} />);
}

export default Component;
