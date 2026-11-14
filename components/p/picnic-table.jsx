import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kqc7i9pry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 4.5h12.5A1.75 1.75 0 0 1 20 6.25A1.75 1.75 0 0 1 18.25 8H5.75A1.75 1.75 0 0 1 4 6.25A1.75 1.75 0 0 1 5.75 4.5M9 8L5.5 20.5M15 8l3.5 12.5M2.5 14h4.75m9.5 0h4.75");
}
</style><path class="kqc7i9pry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:picnic-table"} {...others} />);
}

export default Component;
