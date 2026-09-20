import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oooc15bfi {
  fill: currentColor;
  d: path("M11 22q-.825 0-1.412-.587T9 20v-4H6q-.825 0-1.412-.587T4 14V7q0-1.65 1.175-2.825T8 3h11q.425 0 .713.288T20 4v10q0 .825-.587 1.413T18 16h-3v4q0 .825-.587 1.413T13 22zM6 10h12V5h-1v3q0 .425-.288.713T16 9t-.712-.288T15 8V5h-1v1q0 .425-.288.713T13 7t-.712-.288T12 6V5H8q-.825 0-1.412.588T6 7z");
}
</style><path class="oooc15bfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-paint-rounded"} {...others} />);
}

export default Component;
