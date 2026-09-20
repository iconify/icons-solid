import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wmlgg6klm {
  fill: currentColor;
  d: path("M3 22V4h5l4-4l4 4h5v18zm3-4h12l-3.75-5l-3 4L9 14zm4.1-14h3.8L12 2.1z");
}
</style><path class="wmlgg6klm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:hallway-sharp"} {...others} />);
}

export default Component;
