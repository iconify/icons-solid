import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o7s5hjb5a {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20V8.825q0-.4.15-.762t.425-.638l4.85-4.85q.275-.275.638-.425t.762-.15H18q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm6-5q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m.713-4.288Q13 12.425 13 12V9q0-.425-.288-.712T12 8t-.712.288T11 9v3q0 .425.288.713T12 13t.713-.288");
}
</style><path class="o7s5hjb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sd-card-alert-rounded"} {...others} />);
}

export default Component;
