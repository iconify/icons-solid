import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.voes2i1tk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 6.559L5.5 41.441h6.943l7.59-6.852h-5.364L24 17.036M24 6.56l18.5 34.882h-6.943l-7.59-6.852h5.364L24 17.036");
}
</style><path class="voes2i1tk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dhruv-rathee-academy"} {...others} />);
}

export default Component;
