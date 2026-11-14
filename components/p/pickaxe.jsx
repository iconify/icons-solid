import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jhxb62b6e {
  d: path("M10.5 6h3v15.5h-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y7j-dvi-t {
  d: path("M3 8c4-4 14-4 18 0C17 6.5 7 6.5 3 8Z");
}
</style><g class="ulnmmdpxh"><path class="y7j-dvi-t"/><path class="jhxb62b6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pickaxe"} {...others} />);
}

export default Component;
