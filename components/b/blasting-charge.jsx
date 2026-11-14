import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ze2f-_bal {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.125 10h.75a2.625 2.625 0 0 1 2.625 2.625v6.25A2.625 2.625 0 0 1 9.875 21.5h-.75A2.625 2.625 0 0 1 6.5 18.875v-6.25A2.625 2.625 0 0 1 9.125 10m.375 0c0-2.5 3.5-1.5 3.5-4m-6.5 7.5h6M13 4V2.25m1.5 2.25L16 3m-1 3h2");
}
</style><path class="ze2f-_bal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:blasting-charge"} {...others} />);
}

export default Component;
