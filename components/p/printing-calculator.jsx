import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xy9kbjnbs {
  d: path("M13 12.5h5V15h-5Zm-6.5 1.25h.01m3.49 0h.01M6.5 17.5h.01m3.49 0h.01m5.49.25h.01");
}

.y6w_lsb9b {
  d: path("M3 9.5h18v11H3Zm2.5 0v-6H13v6m-4.75-3h2");
}
</style><g class="ulnmmdpxh"><path class="y6w_lsb9b"/><path class="xy9kbjnbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:printing-calculator"} {...others} />);
}

export default Component;
