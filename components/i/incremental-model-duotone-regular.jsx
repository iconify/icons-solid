import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h68v03mtj {
  fill: currentColor;
  d: path("M2 16a3 3 0 0 1 3 -3h14a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jxd4hqxjs {
  d: path("m6 9 6 -6 6 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oqavd2byi {
  d: path("M2 16a3 3 0 0 1 3 -3h14a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3");
}

.w6_tlja0w {
  d: path("M12 3v10");
}

.wneoubc6n {
  d: path("M7 21h10");
}
</style><g class="nrj6p8qat"><path class="h68v03mtj"/><path class="oqavd2byi"/><path class="jxd4hqxjs"/><path class="w6_tlja0w"/><path class="wneoubc6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:incremental-model-duotone-regular"} {...others} />);
}

export default Component;
