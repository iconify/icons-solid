import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.okenx4bsj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.759 43.5L24.241 30.982M11.24 30.5c0 7.222 5.779 13 12.52 13c7.221 0 13-5.778 13-13v-13c0-7.222-5.779-13-13-13s-12.52 5.778-12.52 13z");
}

.wcfxh0jbd {
  cx: 24px;
  cy: 24px;
  r: 3.225px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="okenx4bsj"/><circle class="wcfxh0jbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cliqq"} {...others} />);
}

export default Component;
