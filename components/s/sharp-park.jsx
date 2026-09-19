import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x0kjlvfhm {
  fill: currentColor;
  d: path("M17 12h2L12 2L5.05 12H7l-3.9 6h6.92v4h3.96v-4H21z");
}
</style><path class="x0kjlvfhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-park"} {...others} />);
}

export default Component;
