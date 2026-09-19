import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qt22b3btg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.079 20.702a17.2 17.2 0 0 0-4.782-9.008a17.46 17.46 0 0 0-24.625 0M6.89 27.32a17.423 17.423 0 0 0 29.406 8.976");
}

.uhm-f7biu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.121 10.149l3.458 3.455l4.621 4.617H5.5V5.5zm24.3 24.279l-4.653-4.649H42.5V42.5l-4.621-4.617z");
}
</style><path class="qt22b3btg"/><path class="uhm-f7biu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:scanmediaplz"} {...others} />);
}

export default Component;
