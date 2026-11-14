import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q1stf9too {
  d: path("M4 2.5h10l-1.5 10c1.5 2 5.5 3 7.5 6.25l-1.25.75H10.5l-1 2h-4L6 13Z");
}

.ranxnmeyd {
  d: path("M4.75 6.5Q9 9 13.25 6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q1stf9too"/><path class="ranxnmeyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cowboy-boot"} {...others} />);
}

export default Component;
