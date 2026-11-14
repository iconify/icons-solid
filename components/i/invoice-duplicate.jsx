import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b72b2enxz {
  d: path("M7 6.5V3h13v14.5h-4.5M7 11h5m-5 3.5h3.5");
}

.nkjgfbcnd {
  d: path("M3.5 6.5h12V21l-2-1.25l-2 1.25l-2-1.25l-2 1.25l-2-1.25l-2 1.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nkjgfbcnd"/><path class="b72b2enxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:invoice-duplicate"} {...others} />);
}

export default Component;
