import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d4o_jdbce {
  d: path("M2.75 15H10l2-1.75L14 15h7.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z8run4epy {
  d: path("M8 3.25h8m-10 3h12m-14 3h16v11.5H4z");
}
</style><g class="x2cwu0gfd"><path class="z8run4epy"/><path class="d4o_jdbce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rubber-band-sharp"} {...others} />);
}

export default Component;
