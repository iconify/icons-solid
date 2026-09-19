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

.qogmuzbeb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.695 28.093l6.02 3.061l-1.789-4.84H24m-4.926-4.627H24m0 4.626h7.074l-1.79 4.841L43.35 24m-.001 0l-14.064-7.154l1.789 4.84H24");
}

.w5habcb4m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.613 35.142l29.53-29.529M12.337 9.512v8.6m5.698-8.6v8.6m-5.698-4.3h5.698");
}
</style><path class="w5habcb4m"/><circle class="cpk0fnbgt"/><path class="qogmuzbeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:host"} {...others} />);
}

export default Component;
