import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eqboe6byv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.25V14.5m5.25 6.75v-10.5m6.5 10.5v-10.5m5.25 10.5V14.5M7.75 5.75a4.25 3 0 1 0 8.5 0a4.25 3 0 1 0-8.5 0m2.75 0h3");
}
</style><path class="eqboe6byv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:australian-football"} {...others} />);
}

export default Component;
