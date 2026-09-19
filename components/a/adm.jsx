import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hlte9dbpo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.22 23.84V8.25H18.95v15.59h-7.32l12.46 15.91l12.45-15.91z");
}

.yhkny2mlp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.34 33.04l5.25 6.71l8.91-11.38h-5.24V17.21h-7.34v6.63m-11.97-2.29h-1.87V10.39H9.74v11.16H4.5l8.91 11.38l2.67-3.41");
}
</style><path class="yhkny2mlp"/><path class="hlte9dbpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:adm"} {...others} />);
}

export default Component;
