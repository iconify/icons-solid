import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b3d6-pylv {
  d: path("M19 20.5H6a1.5 1.5 0 0 1 0-3h11a1.5 1.5 0 0 0 0-3H9c-4 0-3-9 1.75-9");
}

.il245hbpr {
  d: path("M10.75 5.5a2.5 1.75 0 1 0 5 0a2.5 1.75 0 1 0-5 0Zm5 0h2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b3d6-pylv"/><path class="il245hbpr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:coiled-snake"} {...others} />);
}

export default Component;
