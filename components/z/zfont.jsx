import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qg5wvmier {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.16 30.219h29.679V42.5H9.16zm29.68-5.117H9.16l-3.07 5.117h35.82zm-7.669-4.108v1.038H16.829L31.171 5.5H16.829v1.023");
}
</style><path class="qg5wvmier"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:zfont"} {...others} />);
}

export default Component;
