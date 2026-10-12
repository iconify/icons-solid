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

.juagu4zdo {
  cx: 5.5px;
  cy: 17.75px;
  r: 2.5px;
}

.oecphbwmk {
  cx: 12px;
  cy: 6px;
  r: 2.5px;
}

.rxgp3fbut {
  cx: 18.5px;
  cy: 17.75px;
  r: 2.5px;
}
</style><g class="hntgybcog"><circle class="oecphbwmk"/><circle class="juagu4zdo"/><circle class="rxgp3fbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:therefore"} {...others} />);
}

export default Component;
