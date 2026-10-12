import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e3luw4bqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.75h2.75l.27 1.22l1.71 7.56l.27 1.22h9.25v4H8.5l-.32-1.21L5.07 3.96l-.32-1.21zm-.31 3.5h3.85m4.96 10.5v4.5m-3 0h6");
}
</style><path class="e3luw4bqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:airline-seat-sharp"} {...others} />);
}

export default Component;
