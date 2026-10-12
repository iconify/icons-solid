import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l79nns4id {
  d: path("M6.25 2.75h11.5v4.5H6.25zM8.5 5h7M8.75 9.75h8.5l-.22 1.99l-.81 7.52l-.22 1.99H8l-.22-1.99l-.81-7.52l-.22-1.99z");
}

.prz5adf_y {
  d: path("M13.5 15.25a1.5 1.5 0 1 1-3 0a1.5 1.5 0 1 1 3 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="l79nns4id"/><path class="prz5adf_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:electric-shaver-sharp"} {...others} />);
}

export default Component;
