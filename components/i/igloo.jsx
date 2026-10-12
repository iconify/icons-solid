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

.m04f4sbdi {
  d: path("M2.75 21.25a9.25 14 0 0 1 18.5 0Zm2.16-9h14.18m-9.59 0v-4.4m5 4.4v-4.4");
}

.q8y76ib-c {
  d: path("M8.5 21.25V19a3.5 3.5 0 0 1 7 0v2.25Z");
}
</style><g class="hntgybcog"><path class="m04f4sbdi"/><path class="q8y76ib-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:igloo"} {...others} />);
}

export default Component;
