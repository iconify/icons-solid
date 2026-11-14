import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cz-3yo7et {
  d: path("m7.5 12.5l-5 8h19l-5-8");
}

.g3y-ujbgh {
  d: path("M7.5 17.5V9L12 4.5L16.5 9v8.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wi_5cwbys {
  d: path("M10.25 10h3.5v4.5h-3.5Z");
}
</style><g class="ulnmmdpxh"><path class="cz-3yo7et"/><path class="g3y-ujbgh"/><path class="wi_5cwbys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dormer-window"} {...others} />);
}

export default Component;
