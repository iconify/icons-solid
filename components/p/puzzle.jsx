import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ybhz29vem {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 7.25h2.5a2.5 2.5 0 1 1 4.5 0h2.5a2 2 0 0 1 2 2v2.5a2.5 2.5 0 1 1 0 4.5v2.5a2 2 0 0 1-2 2h-9.5a2 2 0 0 1-2-2v-9.5a2 2 0 0 1 2-2");
}
</style><path class="ybhz29vem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:puzzle"} {...others} />);
}

export default Component;
