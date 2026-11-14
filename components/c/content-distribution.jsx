import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ozpcgnbiu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5a2 2 0 0 1 2-2H8l3 3v6a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2ZM14 9l6-6m-3 0h3v3m-4.5 6h6M19 9.5l2.5 2.5l-2.5 2.5m-5 .5l6 6m-3 0h3v-3");
}
</style><path class="ozpcgnbiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:content-distribution"} {...others} />);
}

export default Component;
