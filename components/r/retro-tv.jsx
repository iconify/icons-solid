import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c28d-okej {
  d: path("M5.5 10.5H15V18H5.5Zm13 1h.01M18.5 15h.01");
}

.udnndlb4v {
  d: path("M2.5 7.5h19V21h-19Zm6-5l3.5 5l3.5-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="udnndlb4v"/><path class="c28d-okej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:retro-tv"} {...others} />);
}

export default Component;
