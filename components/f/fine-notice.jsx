import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cti27wb_l {
  d: path("M12.371 21.5H3.5v-19H13l5 5v4.729");
}

.ehd3v_byv {
  d: path("M13 2.5v5h5m-11 3h6.5m-6.5 4h4m3 3.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}
</style><g class="hntgybcog"><path class="cti27wb_l"/><path class="ehd3v_byv"/><path class="nr2kwkbiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fine-notice"} {...others} />);
}

export default Component;
