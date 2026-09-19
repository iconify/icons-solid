import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lz1qsm-2j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.146 5.589l6.224.1l6.901 10.214l-3.336 4.83zm11.258 17.643L32.25 5.5l6.4.04l-11.58 17.716L39.867 42.5l-6.677-.019zM8.133 42.409l10.833-16.757l3.313 4.859l-7.92 11.983z");
}
</style><path class="lz1qsm-2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:xplora"} {...others} />);
}

export default Component;
