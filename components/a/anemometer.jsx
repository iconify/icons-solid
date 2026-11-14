import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p-m40pb3z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3.5a3.5 3.5 0 0 0 0 7Zm11 0a3.5 3.5 0 0 1 0 7ZM10 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM6.5 7H10m4 0h3.5M12 9v12.5M5 13a7 2.75 0 0 0 14 0");
}
</style><path class="p-m40pb3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:anemometer"} {...others} />);
}

export default Component;
