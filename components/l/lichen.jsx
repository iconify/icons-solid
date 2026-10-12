import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e_154ccze {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.25c0-3 2.5-5.25 5.5-5.25h7.5c3 0 5.5 2.25 5.5 5.25a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1M6.5 15.3V13m0 0L5 10.75M6.5 13L8 10.75M12 15v-3.5m0 0L10.25 9M12 11.5L13.75 9m3.75 6.3v-1.8m0 0L16 11.25m1.5 2.25l1.5-2.25");
}
</style><path class="e_154ccze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lichen"} {...others} />);
}

export default Component;
