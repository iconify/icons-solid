import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.af0rzfb6t {
  d: path("M20.25 3.75v4.5h-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kk_gz9o8o {
  d: path("M20.25 12a8.25 8.25 0 1 1-2.42-5.83l2.42 2.08");
}
</style><g class="hntgybcog"><path class="kk_gz9o8o"/><path class="af0rzfb6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rotate-square-cw"} {...others} />);
}

export default Component;
