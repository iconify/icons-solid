import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kj8k34b3u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 16.5v-1.25c-1.5-.85-2.5-2.5-2.5-4.25a4.5 4.5 0 0 1 9 0c0 1.75-1 3.4-2.5 4.25v1.25Zm.5 3h3m8.25 1v-16m-3 3l3-3l3 3");
}
</style><path class="kj8k34b3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:idea-vote"} {...others} />);
}

export default Component;
