import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s9l4lwbkv {
  d: path("M3 19.75a3.75 1.75 0 1 0 7.5 0a3.75 1.75 0 1 0-7.5 0Zm10.5 0a3.75 1.75 0 1 0 7.5 0a3.75 1.75 0 1 0-7.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.us3poi0mk {
  d: path("M9.75 4.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM6.75 18L12 12.5l5.25 5.5M12 12.5v-6M8 12l4-2.75L16 12");
}
</style><g class="ulnmmdpxh"><path class="us3poi0mk"/><path class="s9l4lwbkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:snowshoer"} {...others} />);
}

export default Component;
