import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lym4bor2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 4.5A5.5 5.5 0 0 0 33 10v25.5a8 8 0 0 1-8 8H9.5A5.5 5.5 0 0 0 15 38V12.5a8 8 0 0 1 8-8z");
}
</style><path class="lym4bor2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:curioshuffle"} {...others} />);
}

export default Component;
