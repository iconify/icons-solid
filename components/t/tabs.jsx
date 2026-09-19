import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.t-soxubpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.75 24.38H41.5c0 9.81-7.45 17.75-17.25 17.75a17.75 17.75 0 0 1 0-35.5a17.45 17.45 0 0 1 16.28 11.25");
}

.xmdjycc9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.26 8.53c-1.51-1.25-3.45-3.94-3.67-5.4c0 0-3 4.15 0 7.87m19.3-2.6c1.49-1.3 3.31-3.86 3.52-5.27c0 0 2.92 4 .14 7.69");
}
</style><path class="t-soxubpv"/><path class="xmdjycc9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tabs"} {...others} />);
}

export default Component;
