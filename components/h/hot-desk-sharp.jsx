import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xngo6fbaw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 4.75h9.5M15 3l1.75 1.75L15 6.5m1.75 3.75h-9.5M9 8.5l-1.75 1.75L9 12m-6.25 3h18.5v3H2.75zm2.75 3v3.25m13-3.25v3.25");
}
</style><path class="xngo6fbaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hot-desk-sharp"} {...others} />);
}

export default Component;
