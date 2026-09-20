import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xryy_f6rn {
  fill: currentColor;
  d: path("m7.4 21.375l-1.4-1.4l6-6l6 6l-1.4 1.4L12 16.8zm0-6l-1.4-1.4l6-6l6 6l-1.4 1.4L12 10.8zm0-6L6 7.975l6-6l6 6l-1.4 1.4L12 4.8z");
}
</style><path class="xryy_f6rn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stat-3-sharp"} {...others} />);
}

export default Component;
