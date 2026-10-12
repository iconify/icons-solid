import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e1sqnpbpy {
  d: path("M5.75 6.25v-2.5M12 6.25v-2.5m6.25 2.5v-2.5m-9.33 2.5v15m6.16-15v15M12.75 10.5L11 13.75h2L11.25 17");
}

.g_zb3raan {
  width: 18.5px;
  height: 15px;
  x: 2.75px;
  y: 6.25px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="g_zb3raan"/><path class="e1sqnpbpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:battery-storage"} {...others} />);
}

export default Component;
