import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ah4jhb0mz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 12l3.25-2.25M12 12v3.75");
}

.fznlw_bwv {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12V2.75A9.25 9.25 0 1 1 2.75 12Z");
}

.nli-rgbxh {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3.31 8.84h.01m2.14-3.38h.01m3.37-2.15h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="fznlw_bwv"/><path class="nli-rgbxh"/><path class="ah4jhb0mz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:countdown-sharp"} {...others} />);
}

export default Component;
