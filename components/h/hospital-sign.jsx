import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gt-23jb1v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5h11A3.5 3.5 0 0 1 21 6v5a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 11V6a3.5 3.5 0 0 1 3.5-3.5m.5 12v7m10-7v7m-7.75-16v6m5.5-6v6m-5.5-3h5.5");
}
</style><path class="gt-23jb1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hospital-sign"} {...others} />);
}

export default Component;
