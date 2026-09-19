import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i8izzacgl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5v6h4.819l20.73 28.412c.948 1.31 2.457 2.588 5.1 2.588h6.35v-6h-5.651c-1.165 0-1.903-.817-2.971-2.309L28.933 27H42.5v-6H24.593l-6.869-9.5H42.5v-6z");
}
</style><path class="i8izzacgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:chartr"} {...others} />);
}

export default Component;
