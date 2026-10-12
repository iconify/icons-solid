import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bpxn5vb3u {
  d: path("m12.34 6.99l2.82 4.02q.34.49.34 1.09v8.55q0 .6-.6.6H9.1q-.6 0-.6-.6V12.1q0-.6.34-1.09l2.82-4.02q.34-.49.68 0M12 6.5V2.75M10.75 4h2.5M2.75 21.25L8.5 17m12.75 4.25L15.5 17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ls8nwwbmn {
  d: path("M10.75 16.5v-1.75a1.25 1.25 0 0 1 2.5 0v1.75");
}
</style><g class="hntgybcog"><path class="bpxn5vb3u"/><path class="ls8nwwbmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:church-steeple"} {...others} />);
}

export default Component;
