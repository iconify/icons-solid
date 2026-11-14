import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fx6xsklwp {
  d: path("M10 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x4m-6rbyr {
  d: path("M2.5 4.5h19v15h-19Zm0 1.5l7.25 6M21.5 6l-7.25 6");
}
</style><g class="ulnmmdpxh"><path class="x4m-6rbyr"/><path class="fx6xsklwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:envelope-letter"} {...others} />);
}

export default Component;
