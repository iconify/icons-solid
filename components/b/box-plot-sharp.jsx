import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xlmn3k-7y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 4.75v3m0 8.25v3.5M5.25 7.75h4.5V16h-4.5zm1 4.5h2.5m7.75-9.5v3m0 7.5v4.5m-2.25-12h4.5v7.5h-4.5zm1 3.75h2.5");
}
</style><path class="xlmn3k-7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:box-plot-sharp"} {...others} />);
}

export default Component;
