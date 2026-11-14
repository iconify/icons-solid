import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b05mdwtqh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M8 19a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-.5-6L20 10.25m-9 6.25l2.75-12.75M16.5 2.5c2.5 1 1 3.5 5 4");
}
</style><path class="b05mdwtqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hair-cut"} {...others} />);
}

export default Component;
