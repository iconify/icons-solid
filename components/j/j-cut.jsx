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

.i9e7cue0i {
  d: path("m15.065 6.533l.185.092a.978.978 0 0 1 0 1.75l-.185.092A1.082 1.082 0 0 1 13.5 7.5a1.082 1.082 0 0 1 1.565-.967");
}

.u8s7w2zcc {
  d: path("M11.125 3h7.75A2.625 2.625 0 0 1 21.5 5.625v3.75A2.625 2.625 0 0 1 18.875 12h-7.75A2.625 2.625 0 0 1 8.5 9.375v-3.75A2.625 2.625 0 0 1 11.125 3m-6 12h9.75a2.625 2.625 0 0 1 2.625 2.625v.75A2.625 2.625 0 0 1 14.875 21h-9.75A2.625 2.625 0 0 1 2.5 18.375v-.75A2.625 2.625 0 0 1 5.125 15");
}
</style><g class="hntgybcog"><path class="u8s7w2zcc"/><path class="i9e7cue0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:j-cut"} {...others} />);
}

export default Component;
