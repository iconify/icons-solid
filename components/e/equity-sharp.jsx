import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e5-3wqbcf {
  d: path("M2.75 4.75h18.5v14.5H2.75zM6.25 9h3m-3 3h3m-3 3h3");
}

.t-cts4bra {
  d: path("M15.25 9a3 3 0 1 0 3 3h-3Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="e5-3wqbcf"/><path class="t-cts4bra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:equity-sharp"} {...others} />);
}

export default Component;
