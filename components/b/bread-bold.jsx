import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.smggcebjp {
  fill: currentColor;
  d: path("M244 80a44.05 44.05 0 0 0-44-44H48a44 44 0 0 0-20 83.17V200a20 20 0 0 0 20 20h152a20 20 0 0 0 20-20v-80.83A44 44 0 0 0 244 80M52 123.3a12 12 0 0 0-4-23.3a20 20 0 0 1 0-40h92a20 20 0 0 1 0 40a12 12 0 0 0-4 23.3V196H52ZM200 100a12 12 0 0 0-4 23.3V196h-36v-76.83A43.92 43.92 0 0 0 179.17 60H200a20 20 0 0 1 0 40");
}
</style><path class="smggcebjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:bread-bold"} {...others} />);
}

export default Component;
