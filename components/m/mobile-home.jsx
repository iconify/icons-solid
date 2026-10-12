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

.i5n6oobwi {
  d: path("M3.75 16.25V10q0-1 .92-1.39l6.41-2.72q.92-.39 1.86-.04l7.37 2.8q.94.35.94 1.35v6.25q0 1-1 1H4.75q-1 0-1-1m0-1h-1");
}

.nz_nwmb4o {
  cx: 13.5px;
  cy: 19.25px;
  r: 2px;
}

.qzos8tbtf {
  d: path("M14.5 17.25v-5h3v5M7 10.5h4v2.75H7Z");
}

.z_9qmublw {
  cx: 7px;
  cy: 19.25px;
  r: 2px;
}
</style><g class="hntgybcog"><path class="i5n6oobwi"/><path class="qzos8tbtf"/><circle class="z_9qmublw"/><circle class="nz_nwmb4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mobile-home"} {...others} />);
}

export default Component;
