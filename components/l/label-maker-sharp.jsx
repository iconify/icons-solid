import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.po5lp0myl {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 16h.01M12 16h.01M15 16h.01M9 18.5h.01m2.99 0h.01m2.99 0h.01");
}

.ti6133bws {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6.75v-4h6v4m-9.75 0h13.5v14.5H5.25z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.zxnlgy5hq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 9.75h7.5v3h-7.5Z");
}
</style><g class="ux2u0rbkq"><path class="ti6133bws"/><path class="zxnlgy5hq"/><path class="po5lp0myl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:label-maker-sharp"} {...others} />);
}

export default Component;
