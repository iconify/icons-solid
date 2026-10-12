import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.orafe-bzr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75h18.5v3.5H2.75zm2 3.5h2.5V19.5L6 21.25L4.75 19.5Zm6 0h2.5V19.5L12 21.25l-1.25-1.75Zm6 0h2.5V19.5L18 21.25l-1.25-1.75Zm-14 5.25h.5m5.5 0h.5m5.5 0h.5m5.5 0h.5");
}
</style><path class="orafe-bzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:foundation-pile-sharp"} {...others} />);
}

export default Component;
