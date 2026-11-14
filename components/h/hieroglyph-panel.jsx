import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bcbpfubhp {
  d: path("M4.5 21.5V10a7.5 7.5 0 0 1 15 0v11.5Z");
}

.nqkl1c1tv {
  d: path("M7.5 9.5q4.5-5.5 9 0q-4.5 5.5-9 0Zm4.5 0h.01M7.5 17.25q1.5-2 3 0t3 0t3 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bcbpfubhp"/><path class="nqkl1c1tv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hieroglyph-panel"} {...others} />);
}

export default Component;
