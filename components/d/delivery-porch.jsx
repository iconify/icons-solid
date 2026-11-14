import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f9oz0xbko {
  d: path("M5.5 10.5h4.25v7H5.5Zm-2 7h17v3h-17ZM16 10l3.25 2v3.5l-3.25 2l-3.25-2V12Z");
}

.m86rgxj-i {
  d: path("M12.75 12L16 14l3.25-2M16 14v3.5");
}

.qzgbw4b2d {
  d: path("M2.5 9.5L12 2.75l9.5 6.75v8h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qzgbw4b2d"/><path class="f9oz0xbko"/><path class="m86rgxj-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:delivery-porch"} {...others} />);
}

export default Component;
