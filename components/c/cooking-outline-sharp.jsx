import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n8rvis0ty {
  fill: currentColor;
  d: path("M9 21v-3H2v-2h7q.825 0 1.413.588T11 18v3zm4 0v-3q0-.825.588-1.412T15 16h7v2h-7v3zm-7-6q-1.25 0-2.125-.875T3 12V8h18v4q0 1.25-.875 2.125T18 15zm0-2h12q.425 0 .713-.288T19 12v-2H5v2q0 .425.288.713T6 13M3 7V5h6V4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4v1h6v2zm2 6v-3z");
}
</style><path class="n8rvis0ty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:cooking-outline-sharp"} {...others} />);
}

export default Component;
