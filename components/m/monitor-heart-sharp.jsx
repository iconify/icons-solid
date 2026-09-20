import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h7arotboj {
  fill: currentColor;
  d: path("M3 11.5V5h18v6.5h-4.683l-1.911-3.804h-.812L10 14.866L8.317 11.5zM3 19v-6.5h4.683l1.911 3.804h.812L14 9.134l1.683 3.366H21V19z");
}
</style><path class="h7arotboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:monitor-heart-sharp"} {...others} />);
}

export default Component;
