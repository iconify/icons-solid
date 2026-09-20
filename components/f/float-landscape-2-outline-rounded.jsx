import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fu7crxb4d {
  fill: currentColor;
  d: path("M14 14h3q.425 0 .713-.288T18 13V9q0-.425-.288-.712T17 8h-3q-.425 0-.712.288T13 9v4q0 .425.288.713T14 14M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zm0 0V6z");
}
</style><path class="fu7crxb4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:float-landscape-2-outline-rounded"} {...others} />);
}

export default Component;
