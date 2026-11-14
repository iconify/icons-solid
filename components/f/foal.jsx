import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oqw07519g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 7.5l3.5-5l3.5 1l-.5 1.5l2 .5l-1 1.5l.5 3h7a1.5 1.5 0 0 1 1.5 1.5V13a1.5 1.5 0 0 1-1.5 1.5h-8a2 2 0 0 1-2-2v-3H5Zm6.5 7l-.5 7m3.25-7l.5 7m3-7l-.5 7m3.25-7l.5 7");
}
</style><path class="oqw07519g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:foal"} {...others} />);
}

export default Component;
