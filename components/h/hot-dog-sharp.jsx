import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a6ng3a97x {
  d: path("m7 16.75l1.25-1.5l1.25 1.5l1.25-1.5l1.25 1.5l1.25-1.5l1.25 1.5l1.25-1.5l1.25 1.5");
}

.oxyftq9nl {
  d: path("M2.75 12.25h18.5v7.5H2.75zM3.5 9.5h17");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="oxyftq9nl"/><path class="a6ng3a97x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hot-dog-sharp"} {...others} />);
}

export default Component;
