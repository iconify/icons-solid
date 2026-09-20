import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c8eaqvbhx {
  fill: currentColor;
  d: path("M14 16h3q.425 0 .713-.288T18 15V9q0-.425-.288-.712T17 8h-3q-.425 0-.712.288T13 9v6q0 .425.288.713T14 16m-7 0h3q.425 0 .713-.288T11 15V9q0-.425-.288-.712T10 8H7q-.425 0-.712.288T6 9v6q0 .425.288.713T7 16m-3 4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 6H4v12h16zM4 6v12z");
}
</style><path class="c8eaqvbhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:splitscreen-landscape-outline-rounded"} {...others} />);
}

export default Component;
