import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ccj4w0kkj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 20.886c7.966.896 8.669 12.455 19.5 12.455s11.534-11.559 19.5-12.455m-2.02 6.372h2.02m-6.624 5.987H43.5");
}

.kq9e_obye {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 27.258h2.02M4.5 33.245h6.624M4.5 14.659c9.05.123 10.64 12.745 19.5 12.745S34.45 14.782 43.5 14.66");
}
</style><path class="kq9e_obye"/><path class="ccj4w0kkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:moises"} {...others} />);
}

export default Component;
