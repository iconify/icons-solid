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

.ilrsirbgq {
  d: path("M3.25 18.25C2.75 10 6.75 4.75 12 4.75s9.25 5.25 8.75 13.5l-8.75-4Z");
}

.y5tn3hb2a {
  d: path("M4.5 13.25L12 10.5l7.5 2.75M6.5 9.5L12 7.75l5.5 1.75");
}
</style><g class="hntgybcog"><path class="ilrsirbgq"/><path class="y5tn3hb2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sikh-turban"} {...others} />);
}

export default Component;
