import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ffjw_wb_a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 2.75h11.5v3H6.25zm1.5 3l3.5 10.75h1.5l3.5-10.75M12 16.5v2.25M9.46 11h5.08m-4.04 7.75h3v2.5h-3z");
}
</style><path class="ffjw_wb_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:crutch-sharp"} {...others} />);
}

export default Component;
