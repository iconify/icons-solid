import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ys12mhbrl {
  fill: currentColor;
  d: path("M15.52 19v-8.5H5.915l2.1 2.1l-.708.708L4 10l3.308-3.308l.708.708l-2.1 2.1h10.603V19z");
}
</style><path class="ys12mhbrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:turn-left-outline-sharp"} {...others} />);
}

export default Component;
