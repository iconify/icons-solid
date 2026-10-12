import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zd8yigbji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.37 3.83l1.01-.66Q8 2.75 8.6 3.2l.8.6q.6.45 1.2 0l.8-.6q.6-.45 1.2 0l.8.6q.6.45 1.2 0l.8-.6q.6-.45 1.22-.03l1.01.66q.62.42.64 1.17l.46 15.5q.02.75-.73.75H6q-.75 0-.73-.75L5.73 5q.02-.75.64-1.17m-.72 3.92h12.7m-6.35 0v3");
}
</style><path class="zd8yigbji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:takeout-bag"} {...others} />);
}

export default Component;
