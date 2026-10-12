import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m9ebg4kzq {
  d: path("M6.75 9.5h4V14h-4zm6.5 0h4V14h-4zm-9 2.25h-1.5m17 0h1.5");
}

.nlql5rbms {
  d: path("M4.25 7.25h15.5v9.25H4.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nlql5rbms"/><path class="m9ebg4kzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lab-goggles-sharp"} {...others} />);
}

export default Component;
