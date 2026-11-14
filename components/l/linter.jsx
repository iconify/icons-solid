import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d_x1mx9za {
  d: path("M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0Zm12 5l5.5 5.5");
}

.gu2275b3a {
  d: path("m7 10l2.25 2.25L13 8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d_x1mx9za"/><path class="gu2275b3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:linter"} {...others} />);
}

export default Component;
