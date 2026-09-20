import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.sdrzyl0ft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.545 7.754v25.96m19.5-25.96v25.96m-14.091 2.663a32.14 32.14 0 0 0 21.986 7.072");
}

.uvarzojkb {
  cx: 23.294px;
  cy: 20.734px;
  r: 16.234px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="uvarzojkb"/><path class="sdrzyl0ft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:quax"} {...others} />);
}

export default Component;
