import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i0a9oeb9m {
  fill: currentColor;
  d: path("M6 19v2H3v-9l2.45-7h13.1L21 12v9h-3v-2zm-.2-9h12.4l-1.05-3H6.85zM5 12v5zm2.5 4q.625 0 1.063-.437T9 14.5t-.437-1.062T7.5 13t-1.062.438T6 14.5t.438 1.063T7.5 16m9 0q.625 0 1.063-.437T18 14.5t-.437-1.062T16.5 13t-1.062.438T15 14.5t.438 1.063T16.5 16M5 17h14v-5H5z");
}
</style><path class="i0a9oeb9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:directions-car-outline-sharp"} {...others} />);
}

export default Component;
