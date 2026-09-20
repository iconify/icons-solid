import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gcx_2vd7l {
  fill: currentColor;
  d: path("M9.5 21v-3L6 14.5V7.075h1.075v2.8L1.4 4.2l1.4-1.4l18.4 18.4l-1.4 1.4l-4.95-4.95l-.35.35v3zm7.65-6.7L8 5.15V3h2v4h4V3h2v4h2v6.45z");
}
</style><path class="gcx_2vd7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:power-off-sharp"} {...others} />);
}

export default Component;
