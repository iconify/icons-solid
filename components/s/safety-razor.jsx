import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zq1-6ynbm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.688 3.5h10.625A2.19 2.19 0 0 1 19.5 5.688v.125A2.19 2.19 0 0 1 17.313 8H6.688A2.19 2.19 0 0 1 4.5 5.813v-.125A2.19 2.19 0 0 1 6.688 3.5M12 8v13m-1.5-8h3m-3 3h3m-3 3h3");
}
</style><path class="zq1-6ynbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:safety-razor"} {...others} />);
}

export default Component;
