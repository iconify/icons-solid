import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nk4z65bcc {
  d: path("M10 15.5a2 2.75 0 1 0 4 0a2 2.75 0 1 0-4 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xytc7fblm {
  d: path("M6.5 2.75L12 8.5l5.5-5.75m-10 7h9v11.5h-9z");
}
</style><g class="x2cwu0gfd"><path class="xytc7fblm"/><path class="nk4z65bcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pendant-sharp"} {...others} />);
}

export default Component;
