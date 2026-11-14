import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abgncsbii {
  d: path("M12 22c-3.5-2.5-9-6.5-9-11a9 9 0 0 1 18 0c0 4.5-5.5 8.5-9 11Z");
}

.askbnmbzv {
  d: path("M8 16.25V11.5L12 9l4 2.5v4.75ZM12 9V5");
}

.lthzbq4as {
  d: path("M10.75 13h2.5v3.25h-2.5Z");
}

.o6p3ogplc {
  fill: currentColor;
  d: path("m12 5l3 1.25l-3 1.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="abgncsbii"/><path class="askbnmbzv"/><path class="o6p3ogplc"/><path class="lthzbq4as"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pin-school"} {...others} />);
}

export default Component;
