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

.jiitlcckj {
  d: path("M5.75 12.75v-7.5a1 1 0 0 1 1-1h6.5a1 1 0 0 1 1 1v7.5m3.5 0v-5.5l2.5-3");
}

.jinfa7bry {
  width: 18.5px;
  height: 8.5px;
  x: 2.75px;
  y: 12.75px;
  rx: 2.5px;
}

.lnhp4gbyl {
  d: path("M6.25 16.75h11.5");
}
</style><g class="hntgybcog"><path class="jiitlcckj"/><rect class="jinfa7bry"/><path class="lnhp4gbyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:binding-machine"} {...others} />);
}

export default Component;
