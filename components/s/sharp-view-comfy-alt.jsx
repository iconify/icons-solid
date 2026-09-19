import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vay1lqb2c {
  fill: currentColor;
  d: path("M2 4v16h20V4zm9 13H7v-4h4zm0-6H7V7h4zm6 6h-4v-4h4zm0-6h-4V7h4z");
}
</style><path class="vay1lqb2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-view-comfy-alt"} {...others} />);
}

export default Component;
