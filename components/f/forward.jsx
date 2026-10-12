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

.n-xf2ebup {
  d: path("m14.75 5.25l5.5 5.5l-5.5 5.5");
}

.q0cubz-en {
  d: path("M20.25 10.75h-9.5a7 7 0 0 0-7 7v1");
}
</style><g class="hntgybcog"><path class="n-xf2ebup"/><path class="q0cubz-en"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:forward"} {...others} />);
}

export default Component;
