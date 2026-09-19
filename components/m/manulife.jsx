import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j1g1p344s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 12.9l7.4-7.4v29.6l-7.4 7.4zm14.8 0l7.4-7.4v29.6l-7.4 7.4zm14.8 0l7.4-7.4v29.6l-7.4 7.4z");
}
</style><path class="j1g1p344s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:manulife"} {...others} />);
}

export default Component;
