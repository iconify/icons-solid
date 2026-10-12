import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g828vzbqg {
  cx: 12px;
  cy: 5px;
  r: 2.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p5fhu3n4j {
  d: path("m7.25 21.25l1-8.25a3.75 3.75 0 0 1 7.5 0l1 8.25Zm1.75-10L15.75 17");
}
</style><g class="hntgybcog"><circle class="g828vzbqg"/><path class="p5fhu3n4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hajj-pilgrim"} {...others} />);
}

export default Component;
