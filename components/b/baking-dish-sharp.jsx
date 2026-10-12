import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.di0ykbciw {
  d: path("M7 7.5A1.75 1.75 0 1 1 7 11a1.75 1.75 0 1 1 0-3.5Zm5 0a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 1 1 0-3.5Zm5 0a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 1 1 0-3.5ZM7 13a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 1 1 7 13Zm5 0a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 1 1 0-3.5Zm5 0a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 1 1 0-3.5Z");
}

.hmz588b6d {
  d: path("M2.75 5.25h18.5v13.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hmz588b6d"/><path class="di0ykbciw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:baking-dish-sharp"} {...others} />);
}

export default Component;
