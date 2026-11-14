import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eltqgab4f {
  d: path("M13.1 17H2.5V4.5h19v8.1");
}

.iqtr6mb4d {
  d: path("M9.5 10.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm6 4.75l5 5m0-5l-5 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eltqgab4f"/><path class="iqtr6mb4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:banknote-fake"} {...others} />);
}

export default Component;
