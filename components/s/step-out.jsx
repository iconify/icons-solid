import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.orhy0hbii {
  d: path("M4 14h12v7.5H4Zm6 0V8.5A3.5 3.5 0 0 1 13.5 5h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x9gvi1cps {
  d: path("m17.5 2l3 3l-3 3");
}
</style><g class="ulnmmdpxh"><path class="orhy0hbii"/><path class="x9gvi1cps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:step-out"} {...others} />);
}

export default Component;
