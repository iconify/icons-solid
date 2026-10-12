import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e3nw7qbpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 5.75h5v5.5h-5zm5 1.5h2.25v3h-2.25m-11.5 1h18.5v3H2.75zm2.75 3v6.5m13-6.5v6.5M5.5 18h13");
}
</style><path class="e3nw7qbpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:coffee-table-sharp"} {...others} />);
}

export default Component;
