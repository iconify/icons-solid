import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hl2w_eimj {
  fill: currentColor;
  d: path("M3 19.25C3.41421 19.25 3.75 19.5858 3.75 20C3.75 20.4142 3.41421 20.75 3 20.75C2.58579 20.75 2.25 20.4142 2.25 20C2.25 19.5858 2.58579 19.25 3 19.25Z");
}
</style><path class="hl2w_eimj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:signal-zero-outline"} {...others} />);
}

export default Component;
