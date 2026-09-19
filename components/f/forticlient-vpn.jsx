import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.iv3jwwuhu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 43.5c4.09-.891 15.875-8.424 15.875-17.86V7.74S35.34 4.5 24 4.5S8.125 7.74 8.125 7.74v17.9C8.125 35.076 19.91 42.61 24 43.5");
}

.qcva23vri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.723 18.756h12.555v10.206H17.723z");
}

.r2w_hw80t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.01 18.756v-1.64a3.99 3.99 0 0 1 7.98 0v1.64");
}
</style><path class="qcva23vri"/><path class="iv3jwwuhu"/><path class="r2w_hw80t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:forticlient-vpn"} {...others} />);
}

export default Component;
