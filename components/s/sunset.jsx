import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sbbh6q3gl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 17.5a5 5 0 0 1 10 0Zm-4.25 3.25h18.5M2.75 17.5H4.5m15 0h1.75M6 11.5l1.25 1.25M18 11.5l-1.25 1.25M12 2.75v6M9.5 6.5L12 9l2.5-2.5");
}
</style><path class="sbbh6q3gl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sunset"} {...others} />);
}

export default Component;
