import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.knntbob6c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 21.25v-2.5c2-1.25 4-1.75 6-1c2-1.5 4.5-1.75 6.5-1c2.25-.75 4.25-.5 6 .5v4ZM6.5 16.5c-1-1.5 1-3 0-4.5s1-3 0-4.5m11.25 7.75c1-1.25-1-2.5 0-3.75M9.5 5.75L11 7q2.5-2.8 5 0q-2.5 2.8-5 0L9.5 8.25Z");
}
</style><path class="knntbob6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ocean-floor"} {...others} />);
}

export default Component;
