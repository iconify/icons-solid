import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fkftdxb4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.65 31.103a4.75 4.75 0 0 1-4.128 2.397h0a4.75 4.75 0 0 1-4.75-4.75v-3.087a4.75 4.75 0 0 1 4.75-4.75h0a4.75 4.75 0 0 1 4.75 4.75v1.543h-9.5");
}

.l5wb0ubuc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-24.772 9h12.588m-6.294 19v-19");
}
</style><path class="l5wb0ubuc"/><path class="fkftdxb4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tellurium"} {...others} />);
}

export default Component;
