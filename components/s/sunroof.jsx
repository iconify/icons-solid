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

.i39m0-b-e {
  width: 7px;
  height: 5px;
  x: 8.5px;
  y: 9.5px;
  rx: 1px;
}

.icmt938en {
  width: 13px;
  height: 18.5px;
  x: 5.5px;
  y: 2.75px;
  rx: 4.5px;
}

.riwo9rbiy {
  d: path("M7.75 7.5c2.8-.9 5.7-.9 8.5 0m-8 9.75q3.75 1.05 7.5 0");
}
</style><g class="hntgybcog"><rect class="icmt938en"/><path class="riwo9rbiy"/><rect class="i39m0-b-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sunroof"} {...others} />);
}

export default Component;
