import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.blqyq6d5g {
  fill: currentColor;
  d: path("M11 19H4q-.825 0-1.412-.587T2 17V7q0-.825.588-1.412T4 5h7V4q0-.425.288-.712T12 3t.713.288T13 4v1h7q.825 0 1.413.588T22 7v10q0 .825-.587 1.413T20 19h-7v1q0 .425-.288.713T12 21t-.712-.288T11 20zm0-2v-2H4v2zM4 9h7V7H4zm9 8h7V7h-7v2h1q.825 0 1.413.588T16 11v2q0 .825-.587 1.413T14 15h-1z");
}
</style><path class="blqyq6d5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bullet-chart-rounded"} {...others} />);
}

export default Component;
