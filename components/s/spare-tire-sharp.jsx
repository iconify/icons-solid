import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cm5huqscg {
  d: path("M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z");
}

.l7n3r2b0z {
  d: path("M2.75 11.5v4.75a5 5 0 0 0 5 5h8.5a5 5 0 0 0 5-5V11.5");
}

.opjw_ubeb {
  cx: 12px;
  cy: 11px;
  r: 7.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="opjw_ubeb"/><path class="cm5huqscg"/><path class="l7n3r2b0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:spare-tire-sharp"} {...others} />);
}

export default Component;
