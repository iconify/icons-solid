import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ovga4ccbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m38.358 40.001l3.647-20.681M19.392 45.004l4.529-25.684l11.218 23.073m-13.34-20.952l-3.843 3.843m2.965-5.964h-5.435m6.313-2.122l-3.843-3.843m5.965 2.965v-5.435m2.121 6.313l3.843-3.843");
}
</style><circle class="cpk0fnbgt"/><path class="ovga4ccbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:netbenefits"} {...others} />);
}

export default Component;
