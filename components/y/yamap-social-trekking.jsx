import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i-y1-vbiz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.276 38.182L25.167 8.547a1.28 1.28 0 0 0-2.334 0L5.725 38.182a1.57 1.57 0 0 0-.225.795a1.266 1.266 0 0 0 1.387 1.226h4.45a2.03 2.03 0 0 0 1.882-1.284l7.072-18.083c.296-.754.898-.628.867.185l-.782 17.539a1.477 1.477 0 0 0 1.572 1.643h19.16a1.266 1.266 0 0 0 1.392-1.226a1.6 1.6 0 0 0-.225-.795Z");
}
</style><path class="i-y1-vbiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:yamap-social-trekking"} {...others} />);
}

export default Component;
