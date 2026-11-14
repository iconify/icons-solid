import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fda0jacte {
  d: path("M14 14.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ubazlinms {
  d: path("M2.5 5h19v14h-19Zm0 4.5h19M6 15h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ubazlinms"/><path class="fda0jacte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:crypto-card"} {...others} />);
}

export default Component;
