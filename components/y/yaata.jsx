import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dsogtngbm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39 9.512H9a2 2 0 0 0-2 2v26.976l6.977-6.976H39a2 2 0 0 0 2-2v-18a2 2 0 0 0-2-2m-3.056 11.102H12.056m13.028 5.767H12.056m23.888-11.533H12.056");
}
</style><path class="dsogtngbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:yaata"} {...others} />);
}

export default Component;
