import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e9dh58ngn {
  d: path("M5 3a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ha1vlxxyu {
  d: path("M12 14v2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m_7wrpotl {
  d: path("M17 3a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.se99362hb {
  d: path("M9 19a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.ve_xbsdkz {
  d: path("M6 4v4a6 6 0 0 0 12 0V4");
}
</style><g class="hntgybcog"><path class="ve_xbsdkz"/><path class="e9dh58ngn"/><path class="m_7wrpotl"/><path class="ha1vlxxyu"/><path class="se99362hb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:stethoscope-outline-thin"} {...others} />);
}

export default Component;
