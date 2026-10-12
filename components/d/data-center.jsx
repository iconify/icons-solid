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

.k99wro_fa {
  width: 12.5px;
  height: 7px;
  x: 2.75px;
  y: 3.75px;
  rx: 2px;
}

.okuv1g7yx {
  d: path("M6 7.25h3m-3 9.5h3M18.25 9q.36 2.64 3 3q-2.64.36-3 3q-.36-2.64-3-3q2.64-.36 3-3");
}

.v9pl8i-js {
  width: 12.5px;
  height: 7px;
  x: 2.75px;
  y: 13.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="k99wro_fa"/><rect class="v9pl8i-js"/><path class="okuv1g7yx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:data-center"} {...others} />);
}

export default Component;
