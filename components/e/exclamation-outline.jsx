import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bf1k4r5sc {
  fill: currentColor;
  d: path("M11 14V5h2v9zm0 5v-2h2v2z");
}
</style><path class="bf1k4r5sc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:exclamation-outline"} {...others} />);
}

export default Component;
