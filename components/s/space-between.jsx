import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z9opcebfh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3v18m19-18v18M7 6za1.75 1.75 0 0 1 1.75 1.75v8.5A1.75 1.75 0 0 1 7 18a1.75 1.75 0 0 1-1.75-1.75v-8.5A1.75 1.75 0 0 1 7 6m10 0za1.75 1.75 0 0 1 1.75 1.75v8.5A1.75 1.75 0 0 1 17 18a1.75 1.75 0 0 1-1.75-1.75v-8.5A1.75 1.75 0 0 1 17 6");
}
</style><path class="z9opcebfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:space-between"} {...others} />);
}

export default Component;
