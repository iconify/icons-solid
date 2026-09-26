import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xw2-rqb8f {
  d: path("M6 3H18C19.65685 3 21 4.34315 21 6V18C21 19.65685 19.65685 21 18 21H6C4.34315 21 3 19.65685 3 18V6C3 4.34315 4.34315 3 6 3ZM12 3V9M12 15V21M3 9H21M3 15H21");
}

.ympx8bc9r {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 9H21V15H3V9ZM6.5 10V14H8.5V10ZM11 10V14H13V10ZM15.5 10V14H17.5V10Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="ympx8bc9r"/><path class="xw2-rqb8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:table-cells-split-fill"} {...others} />);
}

export default Component;
