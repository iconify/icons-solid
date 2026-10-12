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

.n1xjxybqc {
  width: 12.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 2px;
}

.ui0-y9b8j {
  d: path("M6 7h5.5M6 10.25h4m2.5 4h-2a2.25 2.25 0 0 0 0 4.5h2m-.75-2.25h9.5m-2.75-2.75l2.75 2.75l-2.75 2.75");
}
</style><g class="hntgybcog"><rect class="n1xjxybqc"/><path class="ui0-y9b8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:parole-paper"} {...others} />);
}

export default Component;
