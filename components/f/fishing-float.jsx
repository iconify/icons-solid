import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.psusbkerw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 7.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M12 12v9.5M2.5 15q2.375-1.5 4.75 0T12 15t4.75 0t4.75 0m-14-7.5h9");
}
</style><path class="psusbkerw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fishing-float"} {...others} />);
}

export default Component;
