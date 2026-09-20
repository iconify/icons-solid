import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u17pz29rj {
  fill: currentColor;
  d: path("M3 21v-2h18v2zM3 5V3h18v2zm0 4V7h2v2zm16 0V7h2v2zM3 17v-2h2v2zm16 0v-2h2v2zM8 17v-4H3v-2h5V7h8v4h5v2h-5v4z");
}
</style><path class="u17pz29rj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:identity-aware-proxy"} {...others} />);
}

export default Component;
