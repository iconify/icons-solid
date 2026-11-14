import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fr80kzb_t {
  d: path("M9.5 12.75L8 16H5.75m9.75-3.5L17 16h2.25");
}

.sgqyqyb0q {
  d: path("M2.5 12c3.5 0 6-3 9.5-3.5l5.5-.5c2-.5 4 .5 4 2c0 1-1.5 1.5-3.5 1.5l-2 .5c-3 1-7.5.75-13.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sgqyqyb0q"/><path class="fr80kzb_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:komodo-dragon"} {...others} />);
}

export default Component;
