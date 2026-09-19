import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dh96y3g7f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 14.926l6.087 6.118c.396.398.934.621 1.495.621h22.284M43.5 33.074l-6.087-6.118a2.1 2.1 0 0 0-1.495-.621H13.634");
}
</style><path class="dh96y3g7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:flytoget"} {...others} />);
}

export default Component;
