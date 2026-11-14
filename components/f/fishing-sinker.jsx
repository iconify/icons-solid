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

.ooq04kmgw {
  d: path("M10.25 7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M12 2.5v2.75");
}

.sr786wbtn {
  d: path("M12 8.75c2.5 2.25 5 4.75 5 7.75a5 5 0 0 1-10 0c0-3 2.5-5.5 5-7.75");
}
</style><g class="hntgybcog"><path class="sr786wbtn"/><path class="ooq04kmgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fishing-sinker"} {...others} />);
}

export default Component;
