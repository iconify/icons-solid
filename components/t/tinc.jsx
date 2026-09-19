import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.vztspcb8f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.06 4.5l7.55 7.55l-7.55 7.55v-5.66H13.94v8.17h-3.78V10.16h23.9Zm0 21.39h3.78v12h-23.9v5.61L6.39 36l7.55-7.55v5.65h20.12Z");
}
</style><path class="vztspcb8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tinc"} {...others} />);
}

export default Component;
