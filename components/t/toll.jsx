import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a0ljzhbqy {
  d: path("M6.5 8.25H9v3.5H6.5Zm7 5h7.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u7hfq__pz {
  width: 8px;
  height: 16.5px;
  x: 3.75px;
  y: 4.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="u7hfq__pz"/><path class="a0ljzhbqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:toll"} {...others} />);
}

export default Component;
