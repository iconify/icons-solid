import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m1yj47bwu {
  fill: currentColor;
  d: path("m9.698 18.5l4.654-6.5l-4.654-6.5h1.22L15.57 12l-4.654 6.5z");
}
</style><path class="m1yj47bwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:single-arrow-outline-sharp"} {...others} />);
}

export default Component;
