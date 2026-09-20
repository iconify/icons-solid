import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.tgw1tmjll {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 24A18.5 18.5 0 1 1 24 5.5h18.5Z");
}

.zap4hetjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.625 22.172A5.625 5.625 0 0 0 24 16.547a5.625 5.625 0 0 0-5.625 5.625v3.656A5.625 5.625 0 0 0 24 31.453a5.625 5.625 0 0 0 5.625-5.625m0 5.605V5.5");
}
</style><path class="tgw1tmjll"/><path class="zap4hetjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:d-point"} {...others} />);
}

export default Component;
