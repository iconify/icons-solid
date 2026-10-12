import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a9hm5fbhh {
  width: 6px;
  height: 6px;
  x: 6.25px;
  y: 6.25px;
  rx: 1px;
}

.akkaj5tbd {
  d: path("M15.75 6.25v6m2.25-6v6m-11.75 3.5H18m-11.75 2.5h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hoi44xq4a {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="hoi44xq4a"/><rect class="a9hm5fbhh"/><path class="akkaj5tbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:motherboard"} {...others} />);
}

export default Component;
