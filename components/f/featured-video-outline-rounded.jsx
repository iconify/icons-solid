import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f6tl894uo {
  fill: currentColor;
  d: path("M6 14h7q.425 0 .713-.288T14 13V8q0-.425-.288-.712T13 7H6q-.425 0-.712.288T5 8v5q0 .425.288.713T6 14m-2 6q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zm0 0V6z");
}
</style><path class="f6tl894uo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:featured-video-outline-rounded"} {...others} />);
}

export default Component;
