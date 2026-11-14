import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jtq_d5s4z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5h4V7h-.75L5 20L3.75 7H3ZM10 3h4v2.5h-.75L12 18.5l-1.25-13H10Zm7 1.5h4V7h-.75L19 20L17.75 7H17ZM2.5 15h19");
}
</style><path class="jtq_d5s4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fertiliser-spikes"} {...others} />);
}

export default Component;
