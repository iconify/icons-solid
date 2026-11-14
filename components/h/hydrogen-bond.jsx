import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.keui7nbts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 6.5s3 4 3 8a3 3 0 0 1-6 0c0-4 3-8 3-8m14 0s3 4 3 8a3 3 0 0 1-6 0c0-4 3-8 3-8m-8.5 8h.01m2.99 0h.01");
}
</style><path class="keui7nbts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hydrogen-bond"} {...others} />);
}

export default Component;
