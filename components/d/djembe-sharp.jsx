import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o74-2lb8l {
  d: path("m8 7l2 3l2-3l2 3l2-3");
}

.vv5z0fyvb {
  d: path("M4.25 4h15.5c0 4-2.5 7.25-5.25 9.25l2.5 8H7l2.5-8C6.75 11.25 4.25 8 4.25 4Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vv5z0fyvb"/><path class="o74-2lb8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:djembe-sharp"} {...others} />);
}

export default Component;
