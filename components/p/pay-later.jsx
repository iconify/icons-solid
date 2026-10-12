import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cd6rv5bwo {
  d: path("M11.75 18.75h-6.5a2.5 2.5 0 0 1-2.5-2.5v-8.5a2.5 2.5 0 0 1 2.5-2.5h13.5a2.5 2.5 0 0 1 2.5 2.5v3.5m-18.5-2h18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kwt9vubhj {
  d: path("M17 14.75V17h2");
}

.upu83lbfh {
  cx: 17px;
  cy: 17px;
  r: 4.25px;
}
</style><g class="hntgybcog"><path class="cd6rv5bwo"/><circle class="upu83lbfh"/><path class="kwt9vubhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pay-later"} {...others} />);
}

export default Component;
