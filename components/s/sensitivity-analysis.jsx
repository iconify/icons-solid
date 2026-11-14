import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fe7cdacyx {
  fill: currentColor;
  d: path("M2.5 4h17v1h-17Zm2 4.5H20v1H4.5ZM7 13h9v1H7Zm2.5 4.5h5v1h-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x64w0obso {
  d: path("M12 2v20");
}
</style><g class="ulnmmdpxh"><path class="x64w0obso"/><path class="fe7cdacyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sensitivity-analysis"} {...others} />);
}

export default Component;
