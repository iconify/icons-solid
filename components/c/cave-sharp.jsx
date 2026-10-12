import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i6zktx90d {
  d: path("m2.75 21.25l2-9.25c1-4.75 3.75-7.25 7.25-7.25s6.25 2.5 7.25 7.25l2 9.25Z");
}

.meiwxnw9s {
  d: path("M8.25 21.25V17.5a3.75 3.75 0 0 1 7.5 0v3.75m-11.5-3.5L5.375 17l1.125.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="i6zktx90d"/><path class="meiwxnw9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cave-sharp"} {...others} />);
}

export default Component;
