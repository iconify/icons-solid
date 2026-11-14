import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nb456eb_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 2.5h5A1.75 1.75 0 0 1 12 4.25v.5a1.75 1.75 0 0 1-1.75 1.75h-5A1.75 1.75 0 0 1 3.5 4.75v-.5A1.75 1.75 0 0 1 5.25 2.5m0 7.5h5A1.75 1.75 0 0 1 12 11.75v.5A1.75 1.75 0 0 1 10.25 14h-5a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 5.25 10m0 7.5h5A1.75 1.75 0 0 1 12 19.25v.5a1.75 1.75 0 0 1-1.75 1.75h-5a1.75 1.75 0 0 1-1.75-1.75v-.5a1.75 1.75 0 0 1 1.75-1.75m2.5-11V10m0 4v3.5M18 15v6m-3-3h6");
}
</style><path class="nb456eb_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sequence-add"} {...others} />);
}

export default Component;
