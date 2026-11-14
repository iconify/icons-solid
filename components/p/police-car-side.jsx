import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a08o4nbzt {
  d: path("M5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM11 2.5h3.5v1.75H11ZM5 14.75h14");
}

.nj2zg0b4t {
  d: path("M2.5 17.5v-4A1.5 1.5 0 0 1 4 12h2l2.75-4c.35-.6.95-1 1.75-1H15c.75 0 1.3.4 1.75 1L19 12h1a1.5 1.5 0 0 1 1.5 1.5v4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nj2zg0b4t"/><path class="a08o4nbzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:police-car-side"} {...others} />);
}

export default Component;
