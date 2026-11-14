import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p0ov38bko {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8h10v13.5H4Zm2-4.5h6V8H6Zm6 2h4m-12 7h10M4 17h10m5-9s2 2.5 2 3.75a2 2 0 0 1-4 0C17 10.5 19 8 19 8Z");
}
</style><path class="p0ov38bko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:conditioner-bottle"} {...others} />);
}

export default Component;
