import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.l25409bgk {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M5.14 13.31L5 32l9.21 9.18v-18.9l9.86 9.86l9.37-9.38v18.72L43 31.93V13.21l-6.68-6.69l-12.25 12.24L11.9 6.6Z");
}
</style><path class="l25409bgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:monzo"} {...others} />);
}

export default Component;
