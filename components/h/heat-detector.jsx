import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n3scmfbzh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h18m-15 0V5q0 4 6 4t6-4V3.5m-10.5 18q-2-2.25 0-4.5t0-4.5m4.5 9q-2-2.25 0-4.5t0-4.5m4.5 9q-2-2.25 0-4.5t0-4.5");
}
</style><path class="n3scmfbzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:heat-detector"} {...others} />);
}

export default Component;
