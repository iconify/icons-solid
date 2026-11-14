import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k46yhactw {
  d: path("m9.25 13l2 2l-2 2");
}

.sarw8qchv {
  d: path("M3.5 21.5V10a5.5 5.5 0 0 1 11 0v11.5m0-13l6-3v14l-6 2ZM6.25 15h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sarw8qchv"/><path class="k46yhactw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:air-door"} {...others} />);
}

export default Component;
