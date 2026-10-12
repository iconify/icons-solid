import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uaoi0t3wk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c2.5 0 4 2.5 4 6.5v2.25a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9.25c0-4 1.5-6.5 4-6.5M8 7h8m-8 3h8m-4 11.25C6.5 20.5 3.5 17 2.75 11.5c3.25 2 6.75 5 9.25 9.75m0 0c5.5-.75 8.5-4.25 9.25-9.75c-3.25 2-6.75 5-9.25 9.75");
}
</style><path class="uaoi0t3wk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:corn-cob"} {...others} />);
}

export default Component;
