import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eypwt4bix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.65 24h22.7m-18.52-7.67h14.34M19.06 31.67h9.88");
}

.mkn96mbzo {
  fill: none;
  stroke: currentColor;
  d: path("M32.75 5.84h-17.5a3 3 0 0 0-2.6 1.51L3.9 22.5a3 3 0 0 0 0 3l8.75 15.15a3 3 0 0 0 2.6 1.51h17.5a3 3 0 0 0 2.6-1.51L44.1 25.5a3 3 0 0 0 0-3L35.35 7.35a3 3 0 0 0-2.6-1.51Z");
}
</style><path class="eypwt4bix"/><path class="mkn96mbzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bumble"} {...others} />);
}

export default Component;
