import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hn43z_v3t {
  d: path("M6.5 4.5a3 3 0 0 1 0 6a3 3 0 0 1 0-6a1.5 1.5 0 0 0 0 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.syob-dbol {
  d: path("M12 2a3 3 0 0 1 0 6a3 3 0 0 1 0-6a1.5 1.5 0 0 0 0 3m5.5-.5a3 3 0 0 1 0 6a3 3 0 0 1 0-6a1.5 1.5 0 0 0 0 3m-11 3l8.5 11m2.5-11L9 21.5M12 8v13.5");
}
</style><g class="hntgybcog"><path class="hn43z_v3t"/><path class="syob-dbol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bouquet-roses"} {...others} />);
}

export default Component;
