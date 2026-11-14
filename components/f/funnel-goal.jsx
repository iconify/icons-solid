import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zlz4p64jh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.2 2.5h7.6a1.386 1.386 0 0 1 .825 2.5l-2.667 1.975a1.75 1.75 0 0 0-.708 1.407V8.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1v-.118a1.75 1.75 0 0 0-.708-1.407L7.375 5A1.386 1.386 0 0 1 8.2 2.5M3 17a9 4.25 0 1 0 18 0a9 4.25 0 1 0-18 0m9 0h.01");
}
</style><path class="zlz4p64jh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:funnel-goal"} {...others} />);
}

export default Component;
