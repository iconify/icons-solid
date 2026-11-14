import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a-okhcbyk {
  d: path("m9.75 10l5.75 3.75l-5.75 3.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x_qumib3l {
  d: path("M2.5 7h19v13.5h-19Zm6-4.25L12 7l3.5-4.25");
}
</style><g class="ulnmmdpxh"><path class="x_qumib3l"/><path class="a-okhcbyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:var-review"} {...others} />);
}

export default Component;
