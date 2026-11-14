import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tuej1tmdy {
  d: path("M2.5 15h19v5.5h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xa8p6o8-w {
  d: path("M5.5 10A1.25 5 0 1 0 8 10a1.25 5 0 1 0-2.5 0Zm5.25 0a1.25 5 0 1 0 2.5 0a1.25 5 0 1 0-2.5 0ZM16 10a1.25 5 0 1 0 2.5 0a1.25 5 0 1 0-2.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="tuej1tmdy"/><path class="xa8p6o8-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dish-rack"} {...others} />);
}

export default Component;
