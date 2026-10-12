import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.el0s0el5v {
  d: path("M2.75 7.75h18.5v8.5H2.75z");
}

.htx90lb3v {
  d: path("M8.5 10.25h7v3.5h-7zm-2.75.25v3m12.5-3v3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="el0s0el5v"/><path class="htx90lb3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:spirit-level-sharp"} {...others} />);
}

export default Component;
