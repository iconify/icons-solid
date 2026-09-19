import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.d93e6-bqh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.2 13.867a3.367 3.367 0 0 1 3.366-3.367h0a3.367 3.367 0 0 1 3.367 3.367v5.555m3.779 4.611V37.5m.001-2.861l6.096-6.066m-4.156 4.136l4.792 4.771m-10.52-13.447L15.787 37.5");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.q_p336b6f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.8 10.5v5.555a3.367 3.367 0 0 0 3.367 3.367h0a3.367 3.367 0 0 0 3.367-3.367V10.5m0 5.555v3.367m-25.068-5.555a3.367 3.367 0 0 1 3.367-3.367h0a3.367 3.367 0 0 1 3.367 3.367v5.555M11.466 10.5v8.922");
}
</style><rect class="j3s9ivbxi"/><path class="q_p336b6f"/><path class="d93e6-bqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:museum-pass"} {...others} />);
}

export default Component;
