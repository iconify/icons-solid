import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.srwwzbcdb {
  d: path("M9.75 14.75h4.5v3.5h-4.5Zm-1-10.25c-1.5 1.5-1.5 3.5 0 5m6.5-5c1.5 1.5 1.5 3.5 0 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y3hbwrw9y {
  d: path("M7 12h10v9.5H7Zm5 0V7");
}
</style><g class="ulnmmdpxh"><path class="y3hbwrw9y"/><path class="srwwzbcdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:avalanche-beacon"} {...others} />);
}

export default Component;
