import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u6wrcwkdw {
  fill: currentColor;
  d: path("M6 15h10q.425 0 .713-.288T17 14V8q0-.425-.288-.712T16 7H6q-.425 0-.712.288T5 8v6q0 .425.288.713T6 15m-2 5q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zm0 0V6z");
}
</style><path class="u6wrcwkdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:magnification-large-outline-rounded"} {...others} />);
}

export default Component;
