import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.veb9gbb9n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v9m-5-3l5-2.25l5 2.25M10 12l2-1.25L14 12m-8 1v8m-3.5-3L6 16.25L9.5 18m-5 3.5l1.5-1l1.5 1M18 13v8m-3.5-3l3.5-1.75L21.5 18m-5 3.5l1.5-1l1.5 1");
}
</style><path class="veb9gbb9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:formation-flight"} {...others} />);
}

export default Component;
