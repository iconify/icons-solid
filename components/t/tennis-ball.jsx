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

.r9f6-eb6f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.596 25.959a21.42 21.42 0 0 0 17.161-6.202A21.42 21.42 0 0 0 25.96 2.596m-3.919 42.808a21.42 21.42 0 0 1 6.202-17.161a21.42 21.42 0 0 1 17.161-6.202");
}
</style><circle class="cpk0fnbgt"/><path class="r9f6-eb6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tennis-ball"} {...others} />);
}

export default Component;
