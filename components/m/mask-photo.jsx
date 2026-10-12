import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fr9wc8ere {
  width: 18.5px;
  height: 16.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xzqlhfbsw {
  d: path("M12 7a5 5 0 0 0 0 10Z");
}

.ylwmg5vdw {
  d: path("M17 12a5 5 0 1 1-10 0a5 5 0 1 1 10 0");
}
</style><g class="hntgybcog"><rect class="fr9wc8ere"/><path class="xzqlhfbsw"/><path class="ylwmg5vdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mask-photo"} {...others} />);
}

export default Component;
