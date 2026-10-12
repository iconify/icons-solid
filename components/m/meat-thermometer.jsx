import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ix1rbnbtt {
  cx: 12px;
  cy: 8px;
  r: 5.25px;
}

.jy2bq-bpt {
  d: path("M12 8L9.4 6.5m2.6 6.75v8");
}
</style><g class="hntgybcog"><circle class="ix1rbnbtt"/><path class="jy2bq-bpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:meat-thermometer"} {...others} />);
}

export default Component;
