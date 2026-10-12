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

.idf1-xb5a {
  cx: 18.5px;
  cy: 7.5px;
  r: 2px;
}

.lcyinnbmm {
  cx: 5.5px;
  cy: 7.5px;
  r: 2px;
}

.m8k5k22cc {
  cx: 8.75px;
  cy: 13.25px;
  r: 2px;
}

.mscsd_b2w {
  cx: 15.25px;
  cy: 13.25px;
  r: 2px;
}

.rsjxg36qn {
  d: path("M12 5.5c0-1.5.75-2.75 2.5-2.75");
}

.u_qlszbyq {
  cx: 12px;
  cy: 7.5px;
  r: 2px;
}

.zopjch_2q {
  cx: 12px;
  cy: 19px;
  r: 2px;
}
</style><g class="hntgybcog"><circle class="lcyinnbmm"/><circle class="u_qlszbyq"/><circle class="idf1-xb5a"/><circle class="m8k5k22cc"/><circle class="mscsd_b2w"/><circle class="zopjch_2q"/><path class="rsjxg36qn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:grapes"} {...others} />);
}

export default Component;
