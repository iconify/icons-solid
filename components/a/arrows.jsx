import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j3s9ivbxi {
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

.lm8h89dmk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.479 9.133L8.271 19.437h10.416zm0 33.431V19.437m8.35.631l10.304 5.208V14.859zm20.671 0H32.133M21.829 33.526l10.304 5.208V28.317zm20.671 0H32.133");
}
</style><rect class="j3s9ivbxi"/><path class="lm8h89dmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:arrows"} {...others} />);
}

export default Component;
