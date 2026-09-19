import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u3d85uqxm {
  fill: currentColor;
  d: path("M7 13h10V7h3V3H4v4h3z");
}

.ym8zes7nn {
  fill: currentColor;
  d: path("M23 9h-4v6H5V9H1v10h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1h3z");
}
</style><path class="u3d85uqxm"/><path class="ym8zes7nn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-chair"} {...others} />);
}

export default Component;
