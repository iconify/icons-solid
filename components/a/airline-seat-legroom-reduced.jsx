import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.syxwrobdm {
  fill: currentColor;
  d: path("M14 21v-3l1-4H8q-.825 0-1.412-.587T6 12V3h6v6h5q.825 0 1.413.588T19 11l-2 7h1.45q.675 0 1.113.413T20 19.5t-.413 1.088T18.5 21zm-2-4H5q-.825 0-1.412-.587T3 15V3h2v12h7z");
}
</style><path class="syxwrobdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:airline-seat-legroom-reduced"} {...others} />);
}

export default Component;
