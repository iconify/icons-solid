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

.p-lcgvb0t {
  d: path("M2.75 8.5h1.5m2 0h1.5m-5 3.5h1.5m2 0h2m-5.5 3.5h1.5m2 0h1.5");
}

.roq2xac0a {
  cx: 16px;
  cy: 12px;
  r: 5.25px;
}
</style><g class="hntgybcog"><circle class="roq2xac0a"/><path class="p-lcgvb0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:motion-reduce"} {...others} />);
}

export default Component;
