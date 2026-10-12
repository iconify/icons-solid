import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fgny6ebra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.75h11m-5.5 0V5c5.5 0 5.5 2.5 0 2.5S6.5 10 12 10s5.5 2.5 0 2.5S6.5 15 12 15v1.5m-4.25 0h8.5v4.75h-8.5z");
}
</style><path class="fgny6ebra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:spring-coil-sharp"} {...others} />);
}

export default Component;
