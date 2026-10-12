import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o_zbsntse {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 19.25h18.5v-4.5a3 3 0 0 0-3-3H10.5c-3.75 0-6.75 3-7.75 7.5m6.5-7.5l1.25-4h7.25a1 1 0 0 1 1 1v3M7 16h11.5");
}
</style><path class="o_zbsntse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:laundry-iron"} {...others} />);
}

export default Component;
