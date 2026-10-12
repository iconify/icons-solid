import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jkyqhmt6r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 10.5a5 5 0 0 1 10 0Zm5-5V2.75M4.25 10.5h15.5M6.5 13.25v5m2.75-5v5m2.75-5v5m2.75-5v5m2.75-5v5m-14.75 3h18.5");
}
</style><path class="jkyqhmt6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rotunda-sharp"} {...others} />);
}

export default Component;
