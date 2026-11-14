import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.famje7ixe {
  d: path("M5 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y42phfc1g {
  d: path("M5 8.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0Zm6 0h.01m-7.51 9H18l3.5 2");
}
</style><g class="ulnmmdpxh"><path class="y42phfc1g"/><path class="famje7ixe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cable-drum-trailer"} {...others} />);
}

export default Component;
