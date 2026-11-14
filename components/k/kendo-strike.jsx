import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a58vl73of {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.5 14.5l11-11M3.922 17.957l3.535-3.535a1.5 1.5 0 0 1 2.121 0a1.5 1.5 0 0 1 0 2.121l-3.535 3.535a1.5 1.5 0 0 1-2.121 0a1.5 1.5 0 0 1 0-2.121M7.5 12.5l4 4");
}
</style><path class="a58vl73of"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:kendo-strike"} {...others} />);
}

export default Component;
