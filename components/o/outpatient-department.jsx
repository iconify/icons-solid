import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u6uve7qmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5v-17c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v4m0 7v6m-5.5-16v4m-2-2h4M7 12h13.5m-2.75-2.75L20.5 12l-2.75 2.75M2.5 21.5h19");
}
</style><path class="u6uve7qmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:outpatient-department"} {...others} />);
}

export default Component;
