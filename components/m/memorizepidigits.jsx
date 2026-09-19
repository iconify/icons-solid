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

.pt43zwu-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.936 34.771a4.45 4.45 0 0 1-3.171 1.326h0c-2.477 0-4.485-2.027-4.485-4.527V15.809m-15.312 0h22.968m-17.226 0v20.288");
}
</style><circle class="cpk0fnbgt"/><path class="pt43zwu-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:memorizepidigits"} {...others} />);
}

export default Component;
