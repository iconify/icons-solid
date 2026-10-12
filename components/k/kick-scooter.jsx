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

.nbxv73-5j {
  cx: 18.75px;
  cy: 18.5px;
  r: 2.25px;
}

.pwi6umbbd {
  d: path("M3.25 16.25h15m.08.04L16 4m-2.25 0h4.5");
}

.zwd9fjbht {
  cx: 5.25px;
  cy: 18.5px;
  r: 2.25px;
}
</style><g class="hntgybcog"><path class="pwi6umbbd"/><circle class="zwd9fjbht"/><circle class="nbxv73-5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:kick-scooter"} {...others} />);
}

export default Component;
