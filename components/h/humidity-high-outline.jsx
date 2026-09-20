import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s9b5mxhgk {
  fill: currentColor;
  d: path("M12 21.5q-3.325 0-5.663-2.3T4 13.6q0-1.575.613-3.012T6.35 8.05L12 2.5l5.65 5.55q1.125 1.1 1.738 2.538T20 13.6q0 3.3-2.337 5.6T12 21.5");
}
</style><path class="s9b5mxhgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:humidity-high-outline"} {...others} />);
}

export default Component;
