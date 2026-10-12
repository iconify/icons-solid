import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d4w2c-elu {
  d: path("M9 10.25v3m11.5 2v-7.5a2.5 2.5 0 0 0-2.5-2.5h-7.5M12.75 3L10.5 5.25l2.25 2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vnrxpx35b {
  width: 12.5px;
  height: 11px;
  x: 2.75px;
  y: 10.25px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="vnrxpx35b"/><path class="d4w2c-elu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:return-parcel"} {...others} />);
}

export default Component;
