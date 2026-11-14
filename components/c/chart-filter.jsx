import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eso81_b5r {
  d: path("M3.5 3v17.5h10.7");
}

.jbh0a07ga {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5M14.5 15h7L19 18.25v3.25l-2-1v-2.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eso81_b5r"/><path class="jbh0a07ga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chart-filter"} {...others} />);
}

export default Component;
