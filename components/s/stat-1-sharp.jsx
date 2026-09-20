import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ux106quse {
  fill: currentColor;
  d: path("m7.4 15.375l-1.4-1.4l6-6l6 6l-1.4 1.4L12 10.8z");
}
</style><path class="ux106quse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stat-1-sharp"} {...others} />);
}

export default Component;
