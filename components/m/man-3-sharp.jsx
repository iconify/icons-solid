import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rmmzo6boe {
  fill: currentColor;
  d: path("M10.23 21.75v-6.57H8.463V7.674h7.077v7.5h-1.77v6.577zM12 6.308l-1.942-1.942L12 2.423l1.942 1.943z");
}
</style><path class="rmmzo6boe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:man-3-sharp"} {...others} />);
}

export default Component;
