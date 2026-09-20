import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u5uubgwpe {
  fill: currentColor;
  d: path("M21.325 18.475L5.85 3H20q.825 0 1.413.588T22 5v12q0 .45-.162.813t-.513.662m-18.15-15.3v2.8L.7 3.5l1.4-1.4l19.8 19.8l-1.4 1.4l-4.3-4.3H16v2H8v-2H4q-.825 0-1.412-.587T2 17V5q0-.925.588-1.375z");
}
</style><path class="u5uubgwpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tv-off"} {...others} />);
}

export default Component;
