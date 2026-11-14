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

.yar0dm-me {
  d: path("M3 21.5c0-3.25 3-4.75 7-5.25V13m4 0v3.25c4 .5 7 2 7 5.25");
}

.yui7gi_py {
  d: path("M7.5 8a4.5 5.5 0 1 0 9 0a4.5 5.5 0 1 0-9 0");
}
</style><g class="hntgybcog"><path class="yui7gi_py"/><path class="yar0dm-me"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:face-front"} {...others} />);
}

export default Component;
