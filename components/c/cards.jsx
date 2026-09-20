import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m6m_0ibii {
  fill: currentColor;
  d: path("M6 11.5V6h5.5v5.5zM6 18v-5.5h5.5V18zm6.5-6.5V6H18v5.5zm0 6.5v-5.5H18V18zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5z");
}
</style><path class="m6m_0ibii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:cards"} {...others} />);
}

export default Component;
