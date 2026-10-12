import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.li4ugbc3a {
  d: path("M12 3.5v-.75M11 7L7 17m6-10l4 10M7 19.5a6 3 0 0 0 10 0");
}

.w-rip4ezp {
  cx: 12px;
  cy: 5.25px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="w-rip4ezp"/><path class="li4ugbc3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:compass-geometry-sharp"} {...others} />);
}

export default Component;
