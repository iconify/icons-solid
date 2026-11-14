import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bfhnicc7r {
  d: path("M2.5 4h8v16h-8Zm11 0h8v16h-8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yw7nsuu5z {
  d: path("M4.5 14.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2-6h.01m8.99 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2-6h.01");
}
</style><g class="ulnmmdpxh"><path class="bfhnicc7r"/><path class="yw7nsuu5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:speaker-pair"} {...others} />);
}

export default Component;
