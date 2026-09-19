import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jdnip1bzj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 14.25a14.625 14.625 0 0 1 14.625 14.625A14.625 14.625 0 0 1 24 43.5Zm0 19.5a14.63 14.63 0 0 1-12.666-7.312a14.63 14.63 0 0 1 0-14.625A14.63 14.63 0 0 1 24 4.5z");
}

.voqx1n0ja {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 16.25a12.625 12.625 0 0 1 12.625 12.625A12.625 12.625 0 0 1 24 41.5Zm0 15.5a12.63 12.63 0 0 1-10.934-6.312a12.63 12.63 0 0 1 0-12.625A12.63 12.63 0 0 1 24 6.5zm0-2.875h12.625");
}

.x92ooxbnt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.927 19.948L24 28.875l8.927 8.927M24 19.125H11.375m3.698-8.927L24 19.125l-8.927 8.927");
}
</style><path class="jdnip1bzj"/><path class="voqx1n0ja"/><path class="x92ooxbnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:citron"} {...others} />);
}

export default Component;
