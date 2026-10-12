import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wq5-t-pjc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.25 8.5l-1.5 12.25m6.5-12.25l-1.5 12.25M4 12.25h10.5M3.25 17h10.5m.75-7.5L17.75 6l1.75 1.75L21.25 6m-3.5-2.25h3v3");
}
</style><path class="wq5-t-pjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:trending-topic"} {...others} />);
}

export default Component;
