import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a-s1lbmfq {
  width: 2.5px;
  height: 2.5px;
  x: 10.75px;
  y: 4.25px;
  rx: 0.75px;
}

.a5qsdrb6z {
  width: 14.5px;
  height: 2.75px;
  x: 4.75px;
  y: 18.5px;
  rx: 1px;
}

.b6s7wvorl {
  d: path("M7 11.75a5 5 0 0 1 10 0Zm.25 0h9.5a1 1 0 0 1 1 1v5.75H6.25v-5.75a1 1 0 0 1 1-1m1.75 2v2.75m3-2.75v2.75m3-2.75v2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rc2d6ykre {
  d: path("M12 2.75v1.5");
}
</style><g class="hntgybcog"><path class="rc2d6ykre"/><rect class="a-s1lbmfq"/><path class="b6s7wvorl"/><rect class="a5qsdrb6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:capitol-dome"} {...others} />);
}

export default Component;
