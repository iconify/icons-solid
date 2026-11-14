import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.auw_8fb6g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19M2.5 12h19m-18-5.5l2.25 2.25l3.5-4.5m5.5 2.25L17 8.75l3.5-4.5M3.5 17.5l2.25 2.25l3.5-4.5m6 0l5 5m0-5l-5 5");
}
</style><path class="auw_8fb6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:test-ci-matrix"} {...others} />);
}

export default Component;
