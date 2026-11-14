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

.smo-4r5yf {
  d: path("M5.5 9.5L12 14l6.5-4.5");
}

.sxn58wo3r {
  d: path("M5.5 9.5h13l1.5 9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm3 0V8a3.5 3.5 0 0 1 7 0v1.5");
}
</style><g class="hntgybcog"><path class="sxn58wo3r"/><path class="smo-4r5yf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:handbag"} {...others} />);
}

export default Component;
