import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c9k2ngkio {
  d: path("M4 2.5L10 5v14l-6 2.5Zm9 9.5h8m-3.5-3.5L21 12l-3.5 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xcmjvmbet {
  d: path("M14 7.5v-5H4v19h10v-5");
}
</style><g class="ulnmmdpxh"><path class="xcmjvmbet"/><path class="c9k2ngkio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:exit-door-sign"} {...others} />);
}

export default Component;
