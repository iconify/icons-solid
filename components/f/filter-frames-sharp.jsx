import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k1q0lk8xi {
  fill: currentColor;
  d: path("M2 22V4h6l4-4l4 4h6v18zm2-2h16V6H4zm2-2V8h12v10z");
}
</style><path class="k1q0lk8xi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-frames-sharp"} {...others} />);
}

export default Component;
