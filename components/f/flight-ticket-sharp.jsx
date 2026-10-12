import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a363pebpi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.25v-2h18.5v4.5a2.25 2.25 0 0 0 0 4.5v4.5H2.75v-4.5a2.25 2.25 0 0 0 0-4.5ZM8 12h8m-2.5 0L11 8.5m2.5 3.5L11 15.5M9.5 12l-1-1.75m1 1.75l-1 1.75");
}
</style><path class="a363pebpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:flight-ticket-sharp"} {...others} />);
}

export default Component;
