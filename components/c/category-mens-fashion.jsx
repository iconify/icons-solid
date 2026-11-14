import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fugz9obys {
  d: path("m10.152 5.36l.619.885a1.5 1.5 0 0 0 2.458 0l.619-.885A1.5 1.5 0 0 0 12.619 3h-1.238a1.5 1.5 0 0 0-1.229 2.36M12 8.5l-1.5 2l1 1.5l-1 6l1.5 1.5l1.5-1.5l-1-6l1-1.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.piuekebvo {
  d: path("M8.5 3L3 5.5L2 10l3.5 1L6 9.5V21h12V9.5l.5 1.5l3.5-1l-1-4.5L15.5 3");
}
</style><g class="hntgybcog"><path class="piuekebvo"/><path class="fugz9obys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:category-mens-fashion"} {...others} />);
}

export default Component;
