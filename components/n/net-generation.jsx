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

.mgndeac6r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.299 6.366C39.327 14.645 31.973 24.119 24 24.072C11.57 24 8.583 13.122 2.885 19.94m10.094 22.524c9.273 3.036 18.807-6.538 23.56-6.247c1.458.089 2.958.48 4.4 1.025");
}
</style><circle class="cpk0fnbgt"/><path class="mgndeac6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:net-generation"} {...others} />);
}

export default Component;
