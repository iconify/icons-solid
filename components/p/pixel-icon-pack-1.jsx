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

.jkn7x_bcl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.718 9.638h-9.285v28.724h6v-9.028h3.285c5.44 0 9.849-4.409 9.849-9.848s-4.41-9.848-9.849-9.848");
}

.ynaxux1nd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.433 23.335v-7.697h3.285c2.123 0 3.848 1.726 3.848 3.848s-1.725 3.848-3.848 3.848zm0-.001l-6 6m0-19.696l6 6m6.272 6.271l4.251 4.252m-4.251-9.098l4.251-4.251");
}
</style><circle class="cpk0fnbgt"/><path class="ynaxux1nd"/><path class="jkn7x_bcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pixel-icon-pack-1"} {...others} />);
}

export default Component;
