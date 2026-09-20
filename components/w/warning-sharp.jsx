import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xg41-gd_j {
  fill: currentColor;
  d: path("M2.73 20L12 4l9.27 16zm9.704-2.566q.182-.182.182-.434t-.182-.434t-.434-.181t-.434.181t-.181.434t.181.434t.434.181t.434-.181m-.934-2.05h1v-5h-1z");
}
</style><path class="xg41-gd_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:warning-sharp"} {...others} />);
}

export default Component;
